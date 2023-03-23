import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { HttpService } from '@app-services/http/http.service';
import { catchError } from 'rxjs/operators';

export class HttpError401Interceptor implements HttpInterceptor {
  constructor(private http: HttpService) {

  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        //this.http.refreshTokens();
        return throwError('----');
      })
    );
  }
}
