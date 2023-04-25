import { Injectable } from '@angular/core';

import { ApiResponseGetCategories } from '@api-models/customer/catalog';
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
import { CategoriesStore } from '../store/categories.store';

@Injectable()
export class CategoriesService {
  constructor(
    private http: HttpService,
    private categoriesStore: CategoriesStore
  ) {}

  getCategories(
    queryParams: Params
  ): Observable<HttpResponseError | HttpResponseData<ApiResponseGetCategories>> {
    return this.http
      .get$<ApiResponseGetCategories>(ROUTE_CUSTOMER.GetCategories, {
        sId: 1,
        dp: 1,
        le: 1,
        ssId: 1
      })
      .pipe(
        tap(() => {
          this.categoriesStore.categoriesLoading$.next(true);
        }),
        delay(0),
        tap(
          (
            response:
              | HttpResponseError
              | HttpResponseData<ApiResponseGetCategories>
          ) => {
            if (isHttpResponseData(response)) {
              this.categoriesStore.updateCategories(response.data);
            } else {
              this.categoriesStore.updateCategories([]);
            }
          }
        ),
        finalize(() => {
          this.categoriesStore.categoriesLoading$.next(false);
        })
      );
  }
}
