import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BasketProduct } from '@api-models/customer/basket';

@Injectable({
  providedIn: 'root',
})
export class BasketStore {
  private _basket$: BehaviorSubject<BasketProduct[]> = new BehaviorSubject<BasketProduct[]>([]);

  public basket$ = this._basket$.asObservable();

  updateBasket(data: BasketProduct[]): void {
    this._basket$.next(data);
  }
}
