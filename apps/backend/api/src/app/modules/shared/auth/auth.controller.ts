import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { NoCache } from '../../../decorators/no-cache.decorator';
import { ApiRequestBodyLogIn, ApiRequestBodyRefreshToken, ApiResponseRefreshToken } from '@api-models/shared/auth';
import { AuthService } from './services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @NoCache()
  login(@Body() body: ApiRequestBodyLogIn) {
    try {
      return this.authService.logIn(body);
    } catch {
      throw new UnauthorizedException('Invalid auth data.');
    }
  }

  @Post('refresh-token')
  async refreshToken(
    @Body() body: ApiRequestBodyRefreshToken
  ): Promise<ApiResponseRefreshToken> {
    try {
      return await this.authService.refreshToken(body.refreshToken);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
