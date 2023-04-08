import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { CustomerSubSupplier } from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class CatalogSubSuppliersStore extends BaseStore {
  private _subSuppliers$: BehaviorSubject<CustomerSubSupplier[]> =
    new BehaviorSubject<CustomerSubSupplier[]>([]);

  public subSuppliers$ = this._subSuppliers$.asObservable();

  updateSubSuppliers(data: CustomerSubSupplier[]) {
    this._subSuppliers$.next(data);
  }
}
