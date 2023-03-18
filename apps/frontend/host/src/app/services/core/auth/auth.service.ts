import { HttpService } from '../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpService) {}

  async logIn(login: string, password: string) {
    const response = await this.http.post('auth/login', { login, password });
    console.log(response.data);
    if (!response.hasError) {
      localStorage.setItem('access_token', response.data?.['access_token']);
      localStorage.setItem('refresh_token', response.data?.['access_token']);
      localStorage.setItem('memberShipType', response.data?.['memberShipType']);

      if (response.data['memberShipType'] === 'PublicUser') {
        return 'PublicUser';
      }

      return false;
    } else {
      // generate event error

      return false;
    }

  }
}
