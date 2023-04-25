import { Injectable } from '@angular/core';
import { ApiResponseSuppliers } from '@api-models/customer/suppliers';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { HttpService } from '@frontend/core/shared/services/http';

import {
  HttpResponseData,
  HttpResponseError,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { tap } from 'rxjs/internal/operators/tap';
import { ContractsStore } from '../store/contracts.store';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ContractsService {
  constructor(private http: HttpService, private contractsStore: ContractsStore) {}

  getContracts(): Observable<HttpResponseError | HttpResponseData<ApiResponseSuppliers>> {
    return this.http
      .get$<ApiResponseSuppliers>(ROUTE_CUSTOMER.GetSuppliers)
      .pipe(
        tap((response: HttpResponseError | HttpResponseData<ApiResponseSuppliers>) => {
          if (isHttpResponseData(response)) {
            this.contractsStore.updateContracts(response.data);
          } else {
            this.contractsStore.updateContracts([]);
          }
        })
      );
  }
}
