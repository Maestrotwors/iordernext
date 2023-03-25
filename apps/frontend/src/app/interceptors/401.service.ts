import {
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from '@app-services/auth/auth.service';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Injectable({ providedIn: 'root' })
export class Http401ErrorService {
  constructor(private authService: AuthService) {}

  async handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    console.log('401');
    const access_token = await this.authService.refreshToken();
 
    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return lastValueFrom(next.handle(newRequest));
  }
}
