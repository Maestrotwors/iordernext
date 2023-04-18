import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { BasketProduct } from '@frontend/models/customer';

@Injectable({
  providedIn: 'root',
})
export class BasketStore extends BaseStore {
  private _basket$: BehaviorSubject<BasketProduct[]> = new BehaviorSubject<BasketProduct[]>([]);

  public basket$ = this._basket$.asObservable();

  updateBasket(data: BasketProduct[]) {
	console.log(data);
    this._basket$.next(data);
  }
}
