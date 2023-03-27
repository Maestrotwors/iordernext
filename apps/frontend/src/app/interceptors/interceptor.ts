import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http401ErrorService } from './401.service';
import { Http403ErrorService } from './403.service';

@Injectable({ providedIn: 'root' })
export class Interceptor implements HttpInterceptor {
  constructor(
    private http401ErrorService: Http401ErrorService,
    private http403ErrorService: Http403ErrorService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
        	return this.http401ErrorService.handle401Error(request, next);
        }
    		if (error.status === 403) {
    			this.http403ErrorService.handle403Error();
    		}
        return throwError(() => error);
      })
    );
  }
}
