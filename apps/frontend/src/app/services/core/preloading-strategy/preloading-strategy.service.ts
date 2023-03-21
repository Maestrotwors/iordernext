import { PreloadingStrategy, Route } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs//internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { of } from 'rxjs/internal/observable/of';
import { timer } from 'rxjs/internal/observable/timer';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const loadRoute = (delay: number) =>
      delay > 0 ? timer(delay).pipe(map(() => fn())) : fn();
    if (route.data && route.data['preloadAfter']) {
      const delay = route.data['preloadAfter'] ? route.data['preloadAfter'] : 0;
      return loadRoute(delay);
    }
    return of(null);
  }
}
