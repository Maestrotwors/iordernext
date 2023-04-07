import { HttpService } from '@app/frontend/core/http';
import { Injectable } from '@angular/core';
import { ContractsStore } from '@app/frontend/store';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  constructor(
    private http: HttpService,
    private contractsStore: ContractsStore
  ) {}

  async getSuppliers() {
    this.http
      .getWithToken$('customer/get-suppliers')
      .pipe((source) => this.contractsStore.trackLoadingPipe(source))
      .subscribe((response: any) => {
        this.contractsStore.updateContracts(response.data);
      });
  }
}
