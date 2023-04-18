import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http/http.service';
import { ApiResponseSuppliers } from '@api-models/customer/suppliers';
import { ContractsStore } from '@frontend/store/customer';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';

import {
  HttpResponseData,
  HttpResponseError,
  isHttpResponseData,
} from '@frontend/models/core';

@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  constructor(private http: HttpService, private contractsStore: ContractsStore) {}

  getContracts() {
    this.http
      .get$<ApiResponseSuppliers>(ROUTE_CUSTOMER.getSuppliers)
      .subscribe(
        (data: HttpResponseError | HttpResponseData<ApiResponseSuppliers>) => {
          if (isHttpResponseData(data)) {
            console.log(data.data);
            this.contractsStore.updateContracts(data.data);
          } else {
            this.contractsStore.updateContracts([]);
            console.log(data.error);
          }
        }
      );
  }
}
