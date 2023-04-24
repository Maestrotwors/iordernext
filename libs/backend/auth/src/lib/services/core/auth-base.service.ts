import { ApiResponseLogIn, Role } from '@api-models/shared/auth';
import { UserEntity } from '@backend/models/shared/auth/entities';
import { Injectable } from '@nestjs/common';
import { TokenService } from './token.service';

@Injectable()
export class AuthBaseService {
  constructor(private tokenService: TokenService) {}

  async generateUserTokens(user: UserEntity): Promise<ApiResponseLogIn> {
    return Promise.all([
      this.tokenService.signAccessToken(user),
      this.tokenService.signRefreshToken(user),
    ]).then(([accessToken, refreshToken]) => {
      return {
        accessToken,
        refreshToken,
        memberShipType: Role.Customer,
      };
    });
  }

  async loginWithCache(login, password) {}

  async loginFromRepository(login, password) {}
}
