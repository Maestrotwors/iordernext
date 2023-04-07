import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';

@Injectable({
  providedIn: 'root',
})
export class CatalogCategoriesStore extends BaseStore {
  private _categories$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public categories$ = this._categories$.asObservable();

  updateCategories(data: any) {
    this._categories$.next(data);
  }
}

