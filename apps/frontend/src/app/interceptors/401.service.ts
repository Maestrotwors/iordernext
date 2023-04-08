import {
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from '@app/frontend/services';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({ providedIn: 'root' })
export class Http401ErrorService {
  constructor(private authService: AuthService) {}

  async handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    const access_token = await this.authService.refreshToken();

    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return await lastValueFrom(next.handle(newRequest));
  }
}
