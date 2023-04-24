import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { CustomerProduct, CustomerProductMapped } from '@frontend/models/customer';

@Injectable({
  providedIn: 'root',
})
export class ProductsStore extends BaseStore {
  private _products$: BehaviorSubject<CustomerProduct[] | null> =
    new BehaviorSubject<CustomerProduct[] | null>(null);
  private _productsMapped$: BehaviorSubject<CustomerProductMapped[] | null> =
    new BehaviorSubject<CustomerProductMapped[] | null>(null);
  private _totalCountProducts$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  public products$ = this._products$.asObservable();
  public productsMapped$ = this._productsMapped$.asObservable();
  public totalCountProducts$ = this._totalCountProducts$.asObservable();

  updateProducts(data: CustomerProduct[], count: number) {
    this._products$.next(data);
    this._totalCountProducts$.next(count);
  }

  updateMappedProducts(data: CustomerProductMapped[]) {
    this._productsMapped$.next(data);
  }
}
