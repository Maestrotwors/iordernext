import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { CustomerCurrentProduct } from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerCatalogProductStore extends BaseStore {
  private _product$: BehaviorSubject<CustomerCurrentProduct | null> =
    new BehaviorSubject<CustomerCurrentProduct | null>(null);

  public product$ = this._product$.asObservable();

  updateProduct(data: CustomerCurrentProduct | null) {
    this._product$.next(data);
  }
}
