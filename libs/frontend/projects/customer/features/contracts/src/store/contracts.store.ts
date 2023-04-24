import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Contracts } from '@frontend/projects/customer/models';

@Injectable({
  providedIn: 'root',
})
export class ContractsStore {
  private _contracts$: BehaviorSubject<Contracts> =
    new BehaviorSubject<Contracts>([]);

  public contracts$ = this._contracts$.asObservable();

  updateContracts(data: Contracts) {
    this._contracts$.next(data);
  }
}
