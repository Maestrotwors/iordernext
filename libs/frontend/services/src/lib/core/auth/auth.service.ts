import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import {
  HttpResponseError,
  HttpResponseData,
  isHttpResponseData,
} from '@frontend/models/core';
import { ApiResponseLogIn, Role } from '@api-models/shared/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
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

  logOut(): void {
    localStorage.clear();
    location.replace('/');
  }

  async refreshToken() {}

  private setLocalStorage(response: HttpResponseData<ApiResponseLogIn>) {
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    localStorage.setItem(
      'memberShipType',
      response.data.memberShipType.toString()
    );
  }
}
