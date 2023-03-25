import { HttpHeaders } from '@angular/common/http';
import { TokenService } from '@app-services/token/token.service';
import { backendConstants } from '@base/constants/backend';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

export class HttpServiceBase {
  constructor(private tokenService: TokenService) {}
  protected hostUrl = backendConstants.host + ':' + backendConstants.port + '/api/';
  protected iAmWaitingForNewToken: BehaviorSubject<boolean> = new BehaviorSubject(false);

  blockRequestsUntilTokenRefreshed(value: boolean) {
    this.iAmWaitingForNewToken.next(value);
  }

  protected checkPipe<T>(source: Observable<T>) {
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
