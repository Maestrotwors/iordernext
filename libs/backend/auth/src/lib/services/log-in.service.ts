import { AuthBaseService } from './core/auth-base.service';
import { ApiRequestLogInBody, Role } from '@api-models/shared/auth';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './core/user.service';

@Injectable()
export class LogInService {
  constructor(
    private userService: UserService,
    private authBaseService: AuthBaseService
  ) {}

  async logIn(body: ApiRequestLogInBody) {
    return await this.loginFromRepository(body.login, body.password);
  }

  private async loginFromRepository(login: string, password: string) {
    const user = await this.userService.getUserByCreds(login, password);
    if (user) {
      //this.cacheService.setValue(user.login, user);
    }
    if (user) {
      return {
        ...(await this.authBaseService.generateUserTokens(user)),
        memberShipType: Role.Customer,
      };
    } else {
      throw new UnauthorizedException('Invalid login or password');
    }
  }
}
