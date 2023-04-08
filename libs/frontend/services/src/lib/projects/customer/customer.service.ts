import { Injectable } from '@angular/core';
import { CustomerBasketProductsService } from '@app/frontend/services';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private basketService: CustomerBasketProductsService) {}

  async initCustomer() {
    await this.basketService.getMyBasket();
  }
}
