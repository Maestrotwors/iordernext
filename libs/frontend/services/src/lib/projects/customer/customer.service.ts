import { Injectable } from '@angular/core';
import { CustomerBasketService } from '@app/frontend/services';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private basketService: CustomerBasketService) {}

  async initCustomer() {
    await this.basketService.getMyBasket();
  }
}
