import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { BaseStore } from '../../base.store';

@Injectable({
  providedIn: 'root',
})
export class ContractsStore extends BaseStore {
  private _contracts$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  public contracts$ = this._contracts$.asObservable();

  updateContracts(data: any) {
    this._contracts$.next(data);
  }
}

