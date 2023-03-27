import { HttpHeaders } from '@angular/common/http';
import { TokenService } from '@app-services/token/token.service';
import { backendConstants } from '@base/constants/backend';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
export class HttpServiceBase {
  constructor(private tokenService: TokenService) {}
  protected hostUrl =
    backendConstants.host + ':' + backendConstants.port + '/api/';
  private iAmWaitingForNewToken: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  blockRequestsUntilTokenRefreshed(value: boolean) {
    this.iAmWaitingForNewToken.next(value);
  }

  // TODO optimize double code
  protected checkPipeWithToken<IHttpResponse>(source: Observable<IHttpResponse>) {
    const filteredPipe = this.iAmWaitingForNewToken.pipe(
      tap((v) => {
        console.log(v);
      }),
      filter((x) => x === false),
      switchMap(() => source)
    );

    return filteredPipe.pipe(
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

  protected checkPipeWithoutToken<IHttpResponse>(source: Observable<IHttpResponse>) {
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
}



