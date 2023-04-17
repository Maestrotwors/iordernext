import {
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Http401ErrorService {
  constructor() {}

  async handle401Error() {
    /*const access_token = await this.authService.refreshToken();

    const newRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${access_token}`,
      },
    });*/
    //return await lastValueFrom(next.handle(newRequest));
  }
}
