import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product } from '../interfaces/product';
import { Injectable } from '@angular/core';
import { BaseStore } from '@base/apps/frontend/src/app/shared/store/base.store';
import { ProductsInfoQuery } from '../interfaces/products-info-query';

@Injectable({
  providedIn: 'root',
})
export class CatalogStore extends BaseStore {
  private _products$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private _productsCount$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private _pageParameters$: BehaviorSubject<ProductsInfoQuery> =
    new BehaviorSubject<ProductsInfoQuery>({limit:40, page:1});

  public products$ = this._products$.asObservable();
  public productsCount$ = this._productsCount$.asObservable();
  public pageParameters$ = this._pageParameters$.asObservable();

  updateProducts(data: any, query: ProductsInfoQuery) {
    this._products$.next(data.products);
    this._productsCount$.next(data.productsCount || 0);
    this._pageParameters$.next(query);
  }
}

