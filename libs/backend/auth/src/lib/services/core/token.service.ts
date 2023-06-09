import { UserEntity } from '@backend/models/shared/auth/entities';
import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { env } from '@config/dev.env';

@Injectable()
export class TokenService {
	constructor(private jwtService: JwtService) {}

	async signAccessToken(user: UserEntity): Promise<string> {
		const payload = {
			id: user.id,
			uat: user.updatedAt,
			login: user.login
		};
		const options = {
			expiresIn: env.JWT_ACCESS_TOKEN_DURATION,
			secret: env.JWT_ACCESS_TOKEN_SECRET
		};

		return await this.jwtService.signAsync(payload, options);
	}

	async signRefreshToken(user: UserEntity): Promise<string> {
		const payload = {
			id: user.id,
			uat: user.updatedAt
		};
		const options = {
			expiresIn: env.JWT_REFRESH_TOKEN_DURATION,
			secret: env.JWT_REFRESH_TOKEN_SECRET
		};

		return await this.jwtService.signAsync(payload, options);
	}

	async verifyRefreshToken(token: string) {
		return await this.verifyToken(token, env.JWT_REFRESH_TOKEN_SECRET);
	}

	async verifyAccessToken(token: string) {
		return await this.verifyToken(token, env.JWT_ACCESS_TOKEN_SECRET);
	}

	decodeToken(token: string) {
		return this.jwtService.decode(token);
	}

	private async verifyToken(token: string, secret: string) {
		try {
			const result = await this.jwtService.verifyAsync(token, { secret });
			const currDatetime = new Date().getTime() / 1000;
			if (currDatetime > result.exp) {
				return false;
			}

			return result;
		} catch {
			return false;
		}
	}
}
