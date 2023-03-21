import { HttpService } from '../../../../services/core/http/http.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  constructor(private http: HttpService) {}

  async getSuppliers() {
    const response = await this.http.getWithToken('customer/getSuppliers');
    console.log(response);
  }
}
