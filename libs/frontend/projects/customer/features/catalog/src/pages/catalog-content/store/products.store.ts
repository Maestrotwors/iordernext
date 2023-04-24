import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { CustomerProduct, CustomerProductMapped } from '@frontend/projects/customer/models';

@Injectable({
  providedIn: 'root',
})
export class ProductsStore {
  private _products$: BehaviorSubject<CustomerProduct[] | null> =
    new BehaviorSubject<CustomerProduct[] | null>(null);
  private _productsMapped$: BehaviorSubject<CustomerProductMapped[] | null> =
    new BehaviorSubject<CustomerProductMapped[] | null>(null);
  private _totalCountProducts$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public productsLoading$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

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
