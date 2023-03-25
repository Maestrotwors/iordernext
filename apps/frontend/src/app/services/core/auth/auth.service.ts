import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';
import { TokenService } from '@app-services/token/token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpService, private tokenService: TokenService) {}
  
  async logIn(login: string, password: string) {
    const response: any = await this.http.post('auth/login', {
      login,
      password,
    });
    if (!response.hasError) {
      localStorage.setItem('access_token', response.data?.['access_token']);
      localStorage.setItem('refresh_token', response.data?.['refresh_token']);
      localStorage.setItem('memberShipType', response.data?.['memberShipType']);

      if (response.data['memberShipType'] === 'PublicUser') {
        return 'PublicUser';
      }

      return false;
    } else {
      // TODO: generate event error

      return false;
    }
  }

  logOut() {
    localStorage.clear();
    location.replace('/');
  }

  async refreshToken() {
    this.http.blockRequestsUntilTokenRefreshed(true);
    const response: any = await this.http.post('auth/refresh-token', {
      refreshToken: this.tokenService.getRefreshToken(),
    });
    console.log(response);
    const access_token = response['data']?.['access_token'];
    const refresh_token = response['data']?.['refresh_token'];
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    this.http.blockRequestsUntilTokenRefreshed(false);
    return access_token;
  }

}
