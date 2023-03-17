import { ChangePasswordDataDto, ChangePasswordDto } from './dto/change-password.dto';
import { ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
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
    return 'logout!!!!';
  }

	async refreshToken(token: string): Promise<UserTokensDto | null> {
		const verificedToken = await this.tokenService.verifyRefreshToken(token);
		if (!verificedToken) {
			throw new UnauthorizedException("Invalid refresh token");
		}
		const user: UserEntity | null = await this.userService.getUserById(verificedToken.id);
		if (!user) {
			throw new UnauthorizedException("Invalid refresh token");
		}
		const tokenDecoded = this.tokenService.decodeToken(token);
		if (this.dateService.compare(user.updatedAt, tokenDecoded?.["uat"])) {
			return await this.generateUserTokens(user);
		}
		throw new UnauthorizedException("Invalid refresh token");
	}

	async verifyAccessToken(token: string) {
		try {
			const tokenResponse = await this.tokenService.verifyAccessToken(token);
			if (tokenResponse) {
				let foundUser: any = await this.cacheService.getValueByKey(tokenResponse.login);
				if (!foundUser) {
					foundUser = await this.userService.getUserById(tokenResponse.id);
				}

				const tokenDecoded = this.tokenService.decodeToken(token);
				const isMatch = await this.dateService.compare(
					foundUser?.["updatedAt"],
					tokenDecoded?.["uat"]
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
				throw new UnauthorizedException("Invalid user.");
			}
		}
		const isMatch = await compare(data.oldPassword, user.password);
		if (isMatch) {
			const newPassword = await hash(data.newPassword, env.HASH_ROUNDS);
			const payload: ChangePasswordDataDto = { login: user.login, newPassword };
			const updatedUser = await this.userService.changePassword(payload);
			this.cacheService.setValue(user.login, updatedUser);
			return {
				"message": "password changed",
				"status": "ok"
			};
		} else {
			throw new ForbiddenException("Invalid password.");
		}
	}

	private async generateUserTokens(user): Promise<UserTokensDto> {
		return {
			access_token: await this.tokenService.signAccessToken(user),
			refresh_token: await this.tokenService.signRefreshToken(user)
		};
	}

	private async loginWithCache(login, password) {
		const userCache: any = await this.cacheService.getValueByKey(login);
		if (userCache) {
			const user = await this.userService.verifyUser(userCache, password);
			if (!user) {
				throw new UnauthorizedException("Invalid login or password");
			} else {
				return this.generateUserTokens(user);
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
			return this.generateUserTokens(user);
		} else {
			throw new UnauthorizedException("Invalid login or password");
		}
	}
}
