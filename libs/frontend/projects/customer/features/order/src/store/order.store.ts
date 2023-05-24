import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class OrderStore {
  private _orderData$: BehaviorSubject<any> = new BehaviorSubject<any>({});

  public orderData$: Observable<any> = this._orderData$.asObservable();
  public orderDataLoading$ = new BehaviorSubject<boolean>(true);

  updateOrderData(data: any) {
    //this._categories$.next(data);
  }
}
