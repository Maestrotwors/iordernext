import { Injectable } from '@angular/core';
import { Role } from '@api-models/shared/auth';
import { AuthLogInService } from './log-in.service';
import { RouteHandlerService } from './route-handler.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private logInService: AuthLogInService,
    private routeHandlerService: RouteHandlerService
  ) {}

  async logIn(login: string, password: string): Promise<void> {
    const response: Role | false = await this.logInService.logIn(
      login,
      password
    );

    if (response !== false) {
      this.routeHandlerService.navigate(response);
    } else {
      // alert('error');
    }
  }

  logOut(): void {
    localStorage.clear();
    location.replace('/');
  }

  async refreshToken() {}
}
