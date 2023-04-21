import { Injectable } from '@angular/core';
import { CustomerCurrentProduct, CustomerCurrentProductMapped } from '@frontend/models/customer';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BaseStore } from '../../base.store';

@Injectable({
  providedIn: 'root',
})
export class ProductStore extends BaseStore {
  private _product$: BehaviorSubject<CustomerCurrentProduct | null> =
    new BehaviorSubject<CustomerCurrentProduct | null>(null);
  private _productMapped$: BehaviorSubject<CustomerCurrentProductMapped | null> =
    new BehaviorSubject<CustomerCurrentProductMapped | null>(null);

  public product$ = this._product$.asObservable();
  public productMapped$ = this._productMapped$.asObservable();

  updateProduct(product: CustomerCurrentProduct) {
    this._product$.next(product);
  }

  updateMappedProduct(data: CustomerCurrentProductMapped) {
    this._productMapped$.next(data);
  }
}