import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { SupplierStore } from '@frontend/models/customer';

@Injectable({
  providedIn: 'root',
})
export class ContractsStore extends BaseStore {
  private _contracts$: BehaviorSubject<SupplierStore[]> = new BehaviorSubject<
    SupplierStore[]
  >([]);

  public contracts$ = this._contracts$.asObservable();

  updateContracts(data: SupplierStore[]) {
    this._contracts$.next(data);
  }
}
