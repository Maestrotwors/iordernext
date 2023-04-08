import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';
import { ApiGetSuppliers } from '@app/transport-models/customer';
import { CustomerSupplier } from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class ContractsStore extends BaseStore {
  private _contracts$: BehaviorSubject<CustomerSupplier[]> =
    new BehaviorSubject<CustomerSupplier[]>([]);

  public contracts$ = this._contracts$.asObservable();

  updateContracts(data: ApiGetSuppliers) {
    this._contracts$.next(data);
  }
}

