import { AuthBaseService } from './core/auth-base.service';
import { ApiRequestBodyLogIn, Role } from '@api-models/shared/auth';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './core/user.service';

@Injectable()
export class LogInService {
  constructor(
    private userService: UserService,
    private authBaseService: AuthBaseService
  ) {}
  async logIn(body: ApiRequestBodyLogIn) {
    return await this.loginFromRepository(body.login, body.password);
  }

  async loginWithCache(login: string, password: string) {
    /*const userCache: any = await this.cacheService.getValueByKey(login);
    if (userCache) {
      const user = await this.userService.verifyUser(userCache, password);
      if (!user) {
        throw new UnauthorizedException('Invalid login or password');
      } else {
        return {
          ...(await this.generateUserTokens(user)),
          memberShipType: 'PublicUser',
        };
      }
    }
    return this.loginFromRepository(login, password);*/
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