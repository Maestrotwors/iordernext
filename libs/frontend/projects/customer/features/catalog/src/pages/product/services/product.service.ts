import { Injectable } from '@angular/core';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { tap } from 'rxjs/internal/operators/tap';
import { HttpService } from '@frontend/core/shared/services/http';
import { ProductStore } from '../store/product.store';
import {
  HttpResponseData,
  HttpResponseError,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponseGetProduct } from '@api-models/customer/product';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';
import { BasketStore } from '@frontend/projects/customer/shared/store/basket';
import { BasketProduct } from '@api-models/customer/basket';
import { CurrentProduct, CurrentProductMapped } from '@frontend/projects/customer/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpService,
    private productStore: ProductStore,
    private basketStore: BasketStore
  ) {}

  getProduct(
    params: object
  ): Observable<HttpResponseError | HttpResponseData<ApiResponseGetProduct>> {
    return this.http
      .get$<ApiResponseGetProduct>(ROUTE_CUSTOMER.GetProduct, { ...params })
      .pipe(
        tap(
          (
            response:
              | HttpResponseError
              | HttpResponseData<ApiResponseGetProduct>
          ) => {
            if (isHttpResponseData(response)) {
              this.productStore.updateProduct(response.data);
            } else {
              alert('Error getProduct');
              this.productStore.updateProduct(null);
            }
          }
        )
      );
  }

  productAndBasketChanged() {
    return combineLatest([
      this.productStore.product$.pipe(filter((x) => x !== null)),
      this.basketStore.basket$.pipe(filter((x) => x !== null)),
    ])
      .pipe(
        tap(([product, basket]) => {
          const _product = product as CurrentProduct;
          const mappedProduct = this.mapProduct(_product, basket);
          this.productStore.updateMappedProduct(mappedProduct);
        })
      )
  }

  private mapProduct(
    product: CurrentProduct,
    basket: BasketProduct[]
  ): CurrentProductMapped {
    const foundInBasket = basket.find(
      (item: BasketProduct) => item.productId === product.id
    );
    return {
      ...product,
      inBasket: foundInBasket ? foundInBasket.quantity : 0,
    };
  }
}
