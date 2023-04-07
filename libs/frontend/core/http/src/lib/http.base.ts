import { HttpHeaders } from '@angular/common/http';
import { TokenService } from '@app/frontend/core/token';
import { backendConstants } from '@base/constants/backend';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { first } from 'rxjs';

export class HttpServiceBase {
  constructor(private tokenService: TokenService) {}
  protected hostUrl =
    backendConstants.host + ':' + backendConstants.port + '/api/';
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

  protected checkPipeWithToken<IHttpResponse>(
    source: Observable<IHttpResponse>
  ) {
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
  }

  protected processOptionsWithToken(options: object = {}) {
    const auth = {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.tokenService.getAccessToken()}`
      ),
    };
    return {
      ...options,
      ...auth,
    };
  }

  protected generateQueryString(query: object) {
    return Object.keys(query).length === 0
      ? ''
      : '?' + this.objectToQuery(query);
  }

  private objectToQuery(obj: any) {
    return Object.keys(obj)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]))
      .join('&');
  }

  private check<IHttpResponse>(source: Observable<IHttpResponse>) {
    return source.pipe(
      map((data) => {
        return {
          data: data,
          hasError: false,
        };
      }),
      catchError(async (err) => {
        return { data: err.error, hasError: true };
      })
    );
  }
}



