import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Category } from '@frontend/projects/customer/models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CategoriesStore {
  private _categories$: BehaviorSubject<Category[]> = new BehaviorSubject<
    Category[]
  >([
    {
      id: 0,
      name: 'Усі категорії',
      parentId: null,
    },
    {
      id: 1,
      name: 'Category 1',
      parentId: null,
    },
    {
      id: 2,
      name: 'Category 2',
      parentId: null,
    },
    {
      id: 3,
      name: 'Category 3',
      parentId: null,
    },
  ]);

  public categories$: Observable<Category[]> = this._categories$.asObservable();
  public categoriesLoading$ = new BehaviorSubject<boolean>(true);

  updateCategories(data: Category[]) {
    //this._categories$.next(data);
  }
}