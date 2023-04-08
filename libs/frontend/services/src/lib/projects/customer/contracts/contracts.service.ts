import { Observable } from 'rxjs//internal/Observable';
import { HttpService } from '@app/frontend/services';
import { Injectable } from '@angular/core';
import { ContractsStore } from '@app/frontend/store';
import { IHttpResponse } from '@app/frontend/models';
import { ApiGetSuppliers } from '@app/transport-models/customer';

@Injectable({ providedIn: 'root' })
export class CustomerContractsService {
  constructor(
    private http: HttpService,
    private contractsStore: ContractsStore
  ) {}

  async getSuppliers() {
    this.http
      .getWithToken$('customer/get-suppliers')
      .pipe((source: Observable<IHttpResponse>) =>
        this.contractsStore.trackLoadingPipe(source)
      )
      .subscribe((response: IHttpResponse) => {
        this.contractsStore.updateContracts(<ApiGetSuppliers>response.data);
      });
  }
}
