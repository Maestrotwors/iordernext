import { Injectable } from '@angular/core';
import { HttpResponseData, HttpResponseError, isHttpResponseData } from '@frontend/models/core';
import { ApiResponseGetProducts } from '@api-models/customer/catalog';
import { Params } from '@angular/router';
import { ProductsStore } from '@frontend/store/customer';
import { HttpService } from '../../../core/http/http.service';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor(
    private http: HttpService,
    private productsStore: ProductsStore
  ) {}

  getProducts(queryParams: Params) {
    this.http
      .get$<ApiResponseGetProducts>(ROUTE_CUSTOMER.GetCatalog, {
        page: queryParams['page'],
        take: 40,
      })
      .subscribe((response: HttpResponseError | HttpResponseData<ApiResponseGetProducts>) => {
          if (isHttpResponseData(response)) {
            this.productsStore.updateProducts(
              response.data.products,
              response.data.productsCount
            );
          } else {
            this.productsStore.updateProducts([], 0);
          }
        }
      );
  }
}
