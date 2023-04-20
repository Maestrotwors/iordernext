import { Injectable } from '@angular/core';
import { CustomerCurrentProduct } from '@frontend/models/customer';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BaseStore } from '../../base.store';

@Injectable({
  providedIn: 'root',
})
export class ProductStore extends BaseStore {
  private _product$: BehaviorSubject<CustomerCurrentProduct | null> = new BehaviorSubject<CustomerCurrentProduct | null>(null);

  public product$ = this._product$.asObservable();

  updateProduct(product: CustomerCurrentProduct) {
    this._product$.next(product);
  }
}
