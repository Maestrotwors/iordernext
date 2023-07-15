import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

import {
  HttpResponseError,
  HttpResponseData,
  isHttpResponseData,
} from '@frontend/core/models/http';
import { ApiResponseLogIn, Role } from '@api-models/shared/auth';
import { LOCAL_STORAGE_TOKEN } from '@iorder/frontend/core/tokens';

@Injectable({ providedIn: 'root' })
export class AuthLogInService {
  ls = inject(LOCAL_STORAGE_TOKEN);
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
    this.ls.setItem('access_token', response.data.accessToken);
    this.ls.setItem('refresh_token', response.data.refreshToken);
    this.ls.setItem('memberShipType', response.data.memberShipType.toString());
  }
}
