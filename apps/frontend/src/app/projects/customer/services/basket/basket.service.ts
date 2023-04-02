import { HttpService } from '@app-services/http/http.service';
import { Injectable } from '@angular/core';
import { StoreService } from '@app-services/store/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private http: HttpService, private storeService: StoreService) {}

  async getMyBasket() {
    const basket = await this.http.getWithToken('customer/get-basket');
    this.storeService.store.account.basket.next({
      basket: basket.data,
      loading: false
    });
  }
}
