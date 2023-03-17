import { Controller, Get, Post, Body, UnauthorizedException, NotAcceptableException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/logIn.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { UserTokensDto } from './dto/user-tokens.dto';
import { SignUpDto } from './dto/signup.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Auth } from '../../decorators/auth.decorator';
import { Role } from '../../../../../../../libs/backend/models/src/lib/auth/roles';

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("login")
	async login(@Body() body: LogInDto) {
		try {
			return await this.authService.logIn(body);
		} catch {
			throw new UnauthorizedException("Invalid auth data.");
		}
	}

	@Post("signup")
	async signup(@Body() body: SignUpDto) {
		try {
			return await this.authService.signup(body);
		} catch {
			throw new NotAcceptableException();
		}
	}

	@Auth([Role.Student, Role.Teacher])
	@Post("change-password")
	async changePassword(@Body() body: ChangePasswordDto, @Req() request: Request) {
		try {
			return await this.authService.changePassword(body, request?.['user']);
		} catch {
			throw new NotAcceptableException();
		}
	}

	@Get("logout")
	logout() {
		return this.authService.logout();
	}

	@Post("refresh-token")
	async refreshToken(@Body() body: RefreshTokenDto): Promise<UserTokensDto | null> {
		try {
			return await this.authService.refreshToken(body.refreshToken);
		} catch {
			throw new UnauthorizedException("Invalid refresh token");
		}
	}
}
