import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { ApiGetCategories } from '@app/transport-models/customer';
import { CustomerCatalogCategory } from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class CatalogCategoriesStore extends BaseStore {
  private _categories$: BehaviorSubject<CustomerCatalogCategory[]> =
    new BehaviorSubject<CustomerCatalogCategory[]>([]);

  public categories$ = this._categories$.asObservable();

  updateCategories(data: ApiGetCategories) {
    this._categories$.next(data);
  }
}

