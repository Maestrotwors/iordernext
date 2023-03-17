import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService) {}
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const auth = request?.headers?.authorization;
		if (auth === undefined) {
			return false;
		}
		const token = auth.split(" ");
		const userInfo = await this.authService.verifyAccessToken(token[1]);
		if (userInfo) {
			request.user = userInfo;
			return true;
		} else {
			return false;
		}
	}
}
