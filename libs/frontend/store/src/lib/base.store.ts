import { Observable } from 'rxjs//internal/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { delay } from 'rxjs/internal/operators/delay';
import { finalize } from 'rxjs/internal/operators/finalize';
import { tap } from 'rxjs/internal/operators/tap';
import { IHttpResponse } from '@app/frontend/models';

@Injectable()
export class BaseStore {
  private _loading$ = new BehaviorSubject(true);
  loading$ = this._loading$.asObservable();

  trackLoadingPipe(source: Observable<IHttpResponse>) {
    return source.pipe(
      tap(() => {
        this._loading$.next(true);
      }),
      delay(0),
      finalize(() => {
        this._loading$.next(false);
      })
    );
  }
}
