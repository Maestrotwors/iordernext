import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { VerifyService } from '../services/verify.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private verifyService: VerifyService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const auth = request?.headers?.authorization;
    if (auth === undefined || auth === '') {
      return false;
    }
    const token = auth.split(' ');
    const userInfo = await this.verifyService.verifyAccessToken(token[1]);
    if (userInfo) {
      request.user = userInfo;
      return true;
    } else {
      return false;
    }
  }
}
