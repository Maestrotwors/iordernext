import { Injectable } from '@angular/core';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { HttpResponseData, HttpResponseError, isHttpResponseData } from '@frontend/models/core';
import { ProductStore } from '@frontend/store/customer';
import { HttpService } from '../../../core/http/http.service';
import { ApiResponseGetProduct } from '@api-models/customer/product';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(
    private http: HttpService,
    private productStore: ProductStore
  ) {}

  getProduct(params: object) {
    this.http
      .get$<ApiResponseGetProduct>(ROUTE_CUSTOMER.GetProduct, {
        ...params,
      })
      .subscribe(
        (
          response: HttpResponseError | HttpResponseData<ApiResponseGetProduct>
        ) => {
          if (isHttpResponseData(response)) {
            this.productStore.updateProduct(response.data);
          } else {
            //this.productStore.updateProduct(null);
          }
        }
      );
  }
}
