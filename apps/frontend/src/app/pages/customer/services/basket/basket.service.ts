import { HttpService } from '@app/frontend/core/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
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
