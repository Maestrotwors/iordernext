import { Injectable } from '@angular/core';
import { HttpResponseData, HttpResponseError, isHttpResponseData } from '@frontend/models/core';
import { HttpService } from '../../../core/http/http.service';
import { ApiResponseGetBasket } from '@api-models/customer/basket';
import { BasketStore } from '@frontend/store/customer';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpService, private basketStore: BasketStore) {}

  getBasket() {
    this.http
      .get$<ApiResponseGetBasket>(ROUTE_CUSTOMER.GetBasket, {})
      .subscribe(
        (
          response: HttpResponseError | HttpResponseData<ApiResponseGetBasket>
        ) => {
          if (isHttpResponseData(response)) {
            this.basketStore.updateBasket(response.data);
          } else {
            this.basketStore.updateBasket([]);
          }
        }
      );
  }

  saveInBasket(productId: number, quantity: number) {
    alert(productId);
    alert(quantity);
  }
}
