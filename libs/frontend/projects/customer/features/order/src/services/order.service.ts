import { Injectable } from '@angular/core';

import { Params } from '@angular/router';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { tap } from 'rxjs/internal/operators/tap';
import {
  HttpResponseData,
  HttpResponseError,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { HttpService } from '@frontend/core/shared/services/http';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/internal/operators/finalize';
import { delay } from 'rxjs/internal/operators/delay';
import { OrderStore } from '../store/order.store';

@Injectable()
export class OrderService {
  constructor(private http: HttpService, private orderStore: OrderStore) {}

  getOrder(
    queryParams: Params
  ): Observable<
    HttpResponseError | HttpResponseData<any>
  > {
    return this.http
      .get$<any>(ROUTE_CUSTOMER.GetOrder, {
        sId: 1,
        dp: 1,
        le: 1
      })
      .pipe(
        tap(() => {
          this.orderStore.orderDataLoading$.next(true);
        }),
        delay(0),
        tap(
          (
            response:
              | HttpResponseError
              | HttpResponseData<any>
          ) => {
            if (isHttpResponseData(response)) {
              this.orderStore.updateOrderData([]);
            } else {
              this.orderStore.updateOrderData([]);
            }
          }
        ),
        finalize(() => {
          this.orderStore.orderDataLoading$.next(false);
        })
      );
  }
}
