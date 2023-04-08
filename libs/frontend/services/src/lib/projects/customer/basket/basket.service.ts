import { Injectable } from '@angular/core';
import { HttpService } from '@app/frontend/services';

@Injectable({
  providedIn: 'root',
})
export class CustomerBasketService {
  constructor(private http: HttpService) {}

  async getMyBasket() {
    /*
    this.storeService.store.account.basket.next({basket: [],loading: true});
    const basket = await this.http.getWithToken('customer/get-basket');
    this.storeService.store.account.basket.next({
      basket: basket.data,
      loading: false
    });*/
  }
}
