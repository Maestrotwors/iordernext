import { ApiResponseRefreshToken } from '@api-models/shared/auth';
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { TokenService } from './core/token.service';
import { UserEntity } from '@backend/models/shared/auth/entities';
import { UserService } from './core/user.service';
import { DateService } from '@backend/helpers';
import { AuthBaseService } from './core/auth-base.service';

@Injectable()
export class RefreshTokenService {
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private dateService: DateService,
    private authBaseService: AuthBaseService
  ) {}

  async refreshToken(token: string): Promise<ApiResponseRefreshToken> {
    const verificedToken = await this.tokenService.verifyRefreshToken(token);
    if (!verificedToken) {
      throw new NotAcceptableException('Invalid refresh token');
    }
    const user: UserEntity | null = await this.userService.getUserById(
      verificedToken.id
    );
    if (!user) {
      throw new NotAcceptableException('Invalid refresh token');
    }
    const tokenDecoded = this.tokenService.decodeToken(token) as { [key: string]: any };

    if (this.dateService.compare(<Date>user.updatedAt, tokenDecoded?.['uat'])) {
      const data = await this.authBaseService.generateUserTokens(user);
      return data;
    }
    throw new NotAcceptableException('Invalid refresh token');
  }
}
