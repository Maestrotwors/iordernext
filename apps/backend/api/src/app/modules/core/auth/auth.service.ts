import { ChangePasswordDataDto, ChangePasswordDto } from './dto/change-password.dto';
import { Injectable, NotAcceptableException, UnauthorizedException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

import { CacheService } from "@be-cache/services/cache.service";
import { DateService } from '@base/libs/backend/system/src/lib/date.service';
import { LogInDto } from './dto/logIn.dto';
import { SignUpDto } from './dto/signup.dto';
import { TokenService } from './token.service';
import { UserEntity } from './entities/user.entity';
import { UserService } from "./user.service";
import { UserTokensDto } from './dto/user-tokens.dto';
import { env } from '@base/config/dev.env';
import { ApiRequestRefreshToken, ApiResponseRefreshToken } from '@app/transport-models/basic';

@Injectable()
export class AuthService {
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private readonly dateService: DateService,
    private readonly cacheService: CacheService
  ) {}

  async logIn({ login, password }: LogInDto) {
    return await this.loginWithCache(login, password);
  }

  logout() {
    return { param: 1, value: 1 };
  }

  async refreshToken(token: string): Promise<ApiRequestRefreshToken> {
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
    const tokenDecoded = this.tokenService.decodeToken(token);

    if (this.dateService.compare(user.updatedAt, tokenDecoded?.['uat'])) {
      const data = await this.generateUserTokens(user);
      return data;
    }
    throw new NotAcceptableException('Invalid refresh token');
  }

  async verifyAccessToken(token: string) {
    try {
      const tokenResponse = await this.tokenService.verifyAccessToken(token);
      if (tokenResponse) {
        let foundUser: any = await this.cacheService.getValueByKey(
          tokenResponse.login
        );
        if (!foundUser) {
          foundUser = await this.userService.getUserById(tokenResponse.id);
        }

        const tokenDecoded = this.tokenService.decodeToken(token);
        const isMatch = await this.dateService.compare(
          foundUser?.['updatedAt'],
          tokenDecoded?.['uat']
        );
        if (isMatch) {
          return foundUser;
        }
      }
      throw new UnauthorizedException();
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }

  async signup(body: SignUpDto) {
    return await this.userService.signup(body);
  }

  async changePassword(data: ChangePasswordDto, user) {
    let foundUser: any = await this.cacheService.getValueByKey(user.login);
    if (!foundUser) {
      foundUser = await this.userService.getUserById(user.id);
      if (!foundUser) {
        throw new UnauthorizedException('Invalid user.');
      }
    }
    const isMatch = await compare(data.oldPassword, user.password);
    if (isMatch) {
      const newPassword = await hash(data.newPassword, env.HASH_ROUNDS);
      const payload: ChangePasswordDataDto = { login: user.login, newPassword };
      const updatedUser = await this.userService.changePassword(payload);
      this.cacheService.setValue(user.login, updatedUser);
      return {
        message: 'password changed',
        status: 'ok',
      };
    } else {
      throw new UnauthorizedException('Invalid password/user.');
    }
  }

  private async generateUserTokens(user): Promise<ApiResponseRefreshToken> {
    return Promise.all([
        this.tokenService.signAccessToken(user),
        this.tokenService.signRefreshToken(user)
      ])
      .then(([access_token, refresh_token]) => {
        return {
          access_token,
          refresh_token,
        };
      });
  }

  private async loginWithCache(login, password) {
    const userCache: any = await this.cacheService.getValueByKey(login);
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
    return this.loginFromRepository(login, password);
  }

  private async loginFromRepository(login, password) {
    const user = await this.userService.getUserByCreds(login, password);
    if (user) {
      this.cacheService.setValue(user.login, user);
    }
    if (user) {
      return {
        ...(await this.generateUserTokens(user)),
        memberShipType: 'PublicUser',
      };
    } else {
      throw new UnauthorizedException('Invalid login or password');
    }
  }
}
