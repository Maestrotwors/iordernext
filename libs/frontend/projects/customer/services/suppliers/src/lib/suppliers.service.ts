import { HttpService } from '@app/frontend/core/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  constructor(private http: HttpService) {}

  async getSuppliers() {
    const response = await this.http.getWithToken('customer/get-suppliers');

    /*this.storeService.store.account.suppliers.next({
      suppliers: response.data,
      loading: false,
    });*/
  }
}
