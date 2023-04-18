import { ApiRequestLogInBody, ApiRequestRefreshTokenBody } from '@api-models/shared/auth';
import { LogInService, RefreshTokenService } from '@backend/auth';
import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private logInService: LogInService,
    private refreshTokenService: RefreshTokenService
  ) {}

  async logIn(body: ApiRequestLogInBody) {
    return await this.logInService.logIn(body);
  }

  async refreshToken(refreshToken: string) {
    try {
      return await this.refreshTokenService.refreshToken(refreshToken);
    } catch {
      throw new ForbiddenException('Invalid refresh token');
    }
  }

  logout() {
    return { param: 1, value: 1 };
  }
}
