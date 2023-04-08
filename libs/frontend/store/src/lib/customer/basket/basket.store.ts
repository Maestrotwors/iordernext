import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { ApiGetBasket } from '@app/transport-models/customer';
import { CustomerBasketProduct } from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class BasketStore extends BaseStore {
  private _basket$: BehaviorSubject<CustomerBasketProduct[]> = new BehaviorSubject<
    CustomerBasketProduct[]
  >([]);

  public basket$ = this._basket$.asObservable();

  updateBasket(data: ApiGetBasket) {
    this._basket$.next(data);
  }
}
