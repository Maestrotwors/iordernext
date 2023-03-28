import { HttpHeaders } from '@angular/common/http';
import { TokenService } from '@app-services/token/token.service';
import { backendConstants } from '@base/constants/backend';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { first } from 'rxjs';
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

  protected checkPipeWithToken<IHttpResponse>(
    source: Observable<IHttpResponse>
  ) {
    const filtered = this.iAmWaitingForNewToken.pipe(
      tap((v) => {
        console.log(v);
      }),
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



