import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { CustomerProduct, ProductsInfoQuery } from '@app/frontend/models';
import { ApiGetCatalog } from '@app/transport-models/customer';

@Injectable({
  providedIn: 'root',
})
export class CatalogProductsStore extends BaseStore {
  private _products$: BehaviorSubject<CustomerProduct[]> = new BehaviorSubject<
    CustomerProduct[]
  >([]);
  private _productsCount$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private _pageParameters$: BehaviorSubject<ProductsInfoQuery> =
    new BehaviorSubject<ProductsInfoQuery>({
      limit: 40,
      page: 1,
    });

  public products$ = this._products$.asObservable();
  public productsCount$ = this._productsCount$.asObservable();
  public pageParameters$ = this._pageParameters$.asObservable();

  updateProducts(data: ApiGetCatalog, query: ProductsInfoQuery) {
    this._products$.next(data.products);
    this._productsCount$.next(data.productsCount || 0);
    this._pageParameters$.next(query);
  }
}
