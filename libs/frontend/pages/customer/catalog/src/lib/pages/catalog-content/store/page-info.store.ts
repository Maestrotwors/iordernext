import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../../../../../../../store/src/lib/base.store';
import { CatalogQueryParams } from '@frontend/models/customer';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductsPageInfoStore extends BaseStore {
  private _pageQueryParams$: BehaviorSubject<CatalogQueryParams | null> =
    new BehaviorSubject<CatalogQueryParams | null>(null);

  public pageQueryParams$ = this._pageQueryParams$.asObservable();

  updatePage(queryParams: Params) {
	const { sId, dp, le, page, search } = queryParams;
	this._pageQueryParams$.next({
		sId: Number(sId),
		dp: Number(dp),
		le: Number(le),
		page: Number(page),
		search: search || null
	});
  }
}
