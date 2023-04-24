import { Injectable } from '@angular/core';
import { HttpService } from '@frontend/core/shared/services/http';

import {
  HttpResponseData,
  HttpResponseError,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { ApiResponseGetBasket } from '@api-models/customer/basket';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { tap } from 'rxjs/internal/operators/tap';
import { BasketStore } from '../../store/basket';
import { Observable } from 'rxjs//internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpService, private basketStore: BasketStore) {}

  getBasket(): Observable<HttpResponseError | HttpResponseData<ApiResponseGetBasket>> {
    return this.http
      .get$<ApiResponseGetBasket>(ROUTE_CUSTOMER.GetBasket, {})
	    .pipe(
        tap((response: HttpResponseError | HttpResponseData<ApiResponseGetBasket>) => {
          if (isHttpResponseData(response)) {
              this.basketStore.updateBasket(response.data);
          } else {
              this.basketStore.updateBasket([]);
          }
	      })
	    );
  }

  saveInBasket(productId: number, quantity: number) {}
}
