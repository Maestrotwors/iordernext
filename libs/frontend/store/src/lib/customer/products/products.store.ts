import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { CustomerProduct } from '@frontend/models/customer';

@Injectable({
  providedIn: 'root',
})
export class ProductsStore extends BaseStore {
  private _products$: BehaviorSubject<CustomerProduct[]> = new BehaviorSubject<CustomerProduct[]>([]);
  private _totalCountProducts$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public products$ = this._products$.asObservable();
  public totalCountProducts$ = this._totalCountProducts$.asObservable();

  updateProducts(data: CustomerProduct[], count: number) {
    this._products$.next(data);
    if (this._totalCountProducts$.getValue() !== count) {
      this._totalCountProducts$.next(count);
    }
  }
}
