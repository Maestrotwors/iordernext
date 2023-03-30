import { HttpService } from '@app-services/http/http.service';
import { Injectable } from '@angular/core';
import { StoreService } from '@app-services/store/store/store.service';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  constructor(private http: HttpService, private storeService: StoreService) {}

  async getSuppliers() {
    const response = await this.http.getWithToken('customer/get-suppliers');
    console.log(response);
    console.log(this.storeService);
    this.storeService.store.account.suppliers.next({
      suppliers: response.data,
      loading: false,
    });
  }
}
