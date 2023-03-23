import { HttpService } from '@app-services/http/http.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SuppliersService {
  constructor(private http: HttpService) {}

  async getSuppliers() {
    const response = await this.http.getWithToken('customer/get-suppliers');
    console.log(response);
  }
}
