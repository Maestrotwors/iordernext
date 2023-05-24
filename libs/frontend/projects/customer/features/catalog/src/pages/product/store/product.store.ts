import { Injectable } from '@angular/core';
import { CurrentProduct, CurrentProductMapped } from '@frontend/projects/customer/models';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class ProductStore {
  private _product$: BehaviorSubject<CurrentProduct | null> =
    new BehaviorSubject<CurrentProduct | null>(null);
  private _productMapped$: BehaviorSubject<CurrentProductMapped | null> =
    new BehaviorSubject<CurrentProductMapped | null>(null);

  public product$ = this._product$.asObservable();
  public productMapped$ = this._productMapped$.asObservable();

  getProduct(): CurrentProductMapped | null {
    return this._productMapped$.getValue();
  }

  updateProduct(product: CurrentProduct | null): void {
    this._product$.next(product);
  }

  updateMappedProduct(data: CurrentProductMapped | null): void {
    this._productMapped$.next(data);
  }
}