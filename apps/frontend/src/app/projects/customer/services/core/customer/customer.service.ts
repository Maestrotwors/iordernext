import { Injectable } from '@angular/core';
import { BasketService } from '../../basket/basket.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private basketService: BasketService) {}

  async initCustomer() {
    await this.basketService.getMyBasket();
  }

  productMappingSubscription() {

  }

  async productMapping() {

  }
}
