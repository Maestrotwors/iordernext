import { API } from '@frontend/constants';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { first } from 'rxjs';
import { HttpResponseData, HttpResponseError } from '@frontend/models/core';

export class HttpServiceBase {
  protected hostUrl = API.protocol + API.host + ':' + API.port + '/api/';
  private iAmWaitingForNewToken: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  public receivingNewToken = this.iAmWaitingForNewToken.asObservable();

  blockRequestsUntilTokenRefreshed(value: boolean) {
    return new Promise((resolve) => {
      if (this.iAmWaitingForNewToken.value === true) {
        resolve(false);
      }
      this.iAmWaitingForNewToken.next(value);
      resolve(true);
    });
  }

  /*
  protected checkPipeWithToken<HttpResponse>(source: Observable<HttpResponse>) {
    const filtered = this.iAmWaitingForNewToken.pipe(
      first((x) => x === false),
      switchMap(() => source)
    );

    return this.check(filtered);
  }

  protected checkPipeWithoutToken<IHttpResponse>(
    source: Observable<IHttpResponse>
  ) {
    return this.check(source);
  }*/

  protected processOptionsWithToken(options: object = {}) {
    /*const auth = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.tokenService.getAccessToken()}`
      ),
    };*/
    return {
      ...options,
    };
  }

  check<T>(
    source: Observable<T>
  ): Observable<HttpResponseError | HttpResponseData<T>> {
    const filtered = this.iAmWaitingForNewToken.pipe(
      first((x) => x === false),
      switchMap(() => source)
    );

    return source.pipe(
      map((data) => {
        return {
          data: <T>data,
          hasError: false,
        };
      }),
      catchError(async (err) => {
        return { error: err, hasError: true };
      })
    );
  }
}
