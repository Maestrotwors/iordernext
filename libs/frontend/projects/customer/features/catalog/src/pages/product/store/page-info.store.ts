import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../../../../../../../store/src/lib/base.store';

@Injectable({
  providedIn: 'root',
})
export class ProductPageInfoStore extends BaseStore {
  private _pageParams$: BehaviorSubject<object | null> = new BehaviorSubject<
    object | null
  >(null);

  public pageParams$ = this._pageParams$.asObservable();

  updatePage(params: object) {
    this._pageParams$.next(params);
  }
}
