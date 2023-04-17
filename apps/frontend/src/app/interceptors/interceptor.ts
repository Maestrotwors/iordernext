import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TokenService } from '@frontend/services/core';

@Injectable({ providedIn: 'root' })
export class Interceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(request.url);
    //const isApiUrl = request.url.startsWith(environment.apiUrl);
    //if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.tokenService.getAccessToken()}` },
      });
    //}

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        /*if (error.status === 401) {
          return this.http401ErrorService.handle401Error(request, next);
        }
        if (error.status === 403) {
          this.http403ErrorService.handle403Error();
        }*/
        return throwError(() => error);
      })
    );
  }
}
