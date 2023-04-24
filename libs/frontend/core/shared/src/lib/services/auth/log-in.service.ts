import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

import {
  HttpResponseError,
  HttpResponseData,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { ApiResponseLogIn, Role } from '@api-models/shared/auth';

@Injectable({ providedIn: 'root' })
export class AuthLogInService {
  constructor(private http: HttpService) {}

  async logIn(login: string, password: string): Promise<Role | false> {
    const response: HttpResponseError | HttpResponseData<ApiResponseLogIn> =
      await this.http.post('auth/login', { login, password });

    if (isHttpResponseData(response)) {
      this.setLocalStorage(response);

      return response.data.memberShipType;
    } else {
      return false;
    }
  }

  private setLocalStorage(response: HttpResponseData<ApiResponseLogIn>) {
    localStorage.setItem('access_token', response.data.accessToken);
    localStorage.setItem('refresh_token', response.data.refreshToken);
    localStorage.setItem(
      'memberShipType',
      response.data.memberShipType.toString()
    );
  }
}
