import { ApiResponseLogIn, Role } from '@api-models/shared/auth';
import { Injectable } from '@nestjs/common';
import { TokenService } from './token.service';

@Injectable()
export class AuthBaseService {
  constructor(private tokenService: TokenService) {}

  async generateUserTokens(user): Promise<ApiResponseLogIn> {
    return Promise.all([
      this.tokenService.signAccessToken(user),
      this.tokenService.signRefreshToken(user),
    ]).then(([access_token, refresh_token]) => {
      return {
        access_token,
        refresh_token,
        memberShipType: Role.Customer
      };
    });
  }

  async loginWithCache(login, password) {}

  async loginFromRepository(login, password) {}
}
