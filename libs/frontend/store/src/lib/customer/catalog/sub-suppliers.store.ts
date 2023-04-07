import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';

@Injectable({
  providedIn: 'root',
})
export class CatalogSubSuppliersStore extends BaseStore {
  private _subSuppliers$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  public subSuppliers$ = this._subSuppliers$.asObservable();

  updateSubSuppliers(data: any) {
    this._subSuppliers$.next(data);
  }
}
