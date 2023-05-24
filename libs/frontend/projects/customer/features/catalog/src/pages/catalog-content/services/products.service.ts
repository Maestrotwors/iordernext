import { Injectable } from '@angular/core';

import { ApiResponseGetProducts, Product } from '@api-models/customer/catalog';
import { Params } from '@angular/router';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { tap } from 'rxjs/internal/operators/tap';
import {
  HttpResponseData,
  HttpResponseError,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { HttpService } from '@frontend/core/shared/services/http';
import { ProductsStore } from '../store/products.store';
import { Observable } from 'rxjs/internal/Observable';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';
import { BasketStore } from '@frontend/projects/customer/shared/store/basket';
import { BasketProduct, CustomerProduct, CustomerProductMapped } from '@frontend/projects/customer/models';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpService,
    private productsStore: ProductsStore,
    private basketStore: BasketStore
  ) {}

  getProducts(
    queryParams: Params,
    categoryId: number
  ): Observable<HttpResponseError | HttpResponseData<ApiResponseGetProducts>> {
    return this.http
      .get$<ApiResponseGetProducts>(ROUTE_CUSTOMER.GetCatalog, {
        page: queryParams['page'],
        take: 40,
        category: categoryId || -1,
      })
      .pipe(
        tap(() => {
          this.productsStore.productsLoading$.next(true);
        }),
        delay(0),
        tap(
          (
            response:
              | HttpResponseError
              | HttpResponseData<ApiResponseGetProducts>
          ) => {
            if (isHttpResponseData(response)) {
              this.productsStore.updateProducts(
                response.data.products,
                response.data.productsCount
              );
            } else {
              this.productsStore.updateProducts([], 0);
            }
            this.productsStore.productsLoading$.next(false);
          }
        )
      );
  }

  productsAndBasketChanged() {
    return combineLatest([
      this.productsStore.products$.pipe(filter((x) => x !== null)),
      this.basketStore.basket$.pipe(filter((x) => x !== null)),
    ])
      .pipe(
        tap(([products, basket]) => {
          const _products = products as Product[];
          const mappedProducts = this.mapProducts(_products, basket);
          this.productsStore.updateMappedProducts(mappedProducts);
        })
      )
  }

  private mapProducts(
    products: CustomerProduct[] | null,
    basket: BasketProduct[]
  ): CustomerProductMapped[] {
    if (!products) {
      return [];
    }
    const mappedProducts = products.map((product: CustomerProduct) => {
      const foundInBasket = basket.find(
        (item: BasketProduct) => item.productId === product.id
      );
      return {
        ...product,
        inBasket: foundInBasket ? foundInBasket.quantity : 0,
      };
    });

    return mappedProducts;
  }
}
