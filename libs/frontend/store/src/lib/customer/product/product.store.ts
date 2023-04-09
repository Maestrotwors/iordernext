import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import {
  CustomerCurrentProduct,
  CustomerCurrentProductMapped,
} from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerCatalogProductStore extends BaseStore {
  private _product$: BehaviorSubject<CustomerCurrentProduct | null> =
    new BehaviorSubject<CustomerCurrentProduct | null>(null);
  private _productMapped$: BehaviorSubject<CustomerCurrentProductMapped | null> =
    new BehaviorSubject<CustomerCurrentProductMapped | null>(null);

  public product$ = this._product$.asObservable();
  public productMapped$ = this._productMapped$.asObservable();

  updateProduct(data: CustomerCurrentProduct | null) {
    this._product$.next(data);
  }

  updateMappedProduct(product: CustomerCurrentProductMapped) {
    this._productMapped$.next(product);
  }

  getProduct(): CustomerCurrentProduct {
    return this._productMapped$.getValue() as CustomerCurrentProduct;
  }
}
