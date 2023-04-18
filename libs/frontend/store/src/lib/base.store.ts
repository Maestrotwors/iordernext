import { Observable } from 'rxjs//internal/Observable';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { delay } from 'rxjs/internal/operators/delay';
import { finalize } from 'rxjs/internal/operators/finalize';
import { tap } from 'rxjs/internal/operators/tap';


@Injectable()
export class BaseStore {
  loadingKeys: { [key: string]: BehaviorSubject<boolean> } = {};

  trackLoadingPipe(source: Observable<any>, key: string) {
    return source.pipe(
      tap(() => {
        this.loadingKeys[key].next(true);
      }),
      delay(0),
      finalize(() => {
        this.loadingKeys[key].next(false);
      })
    );
  }
}
