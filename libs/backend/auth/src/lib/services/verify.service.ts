import {
  Injectable, UnauthorizedException
} from '@nestjs/common';
import { TokenService } from './core/token.service';
import { UserService } from './core/user.service';
import { UserEntity } from '../../../../models/src/lib/shared/auth/entities/user.entity';

@Injectable()
export class VerifyService {
  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {}

  async verifyAccessToken(token: string) {
    try {
      const tokenResponse = await this.tokenService.verifyAccessToken(token);
      if (tokenResponse) {
        //let foundUser: any = await this.cacheService.getValueByKey(
        //  tokenResponse.login
        //);
        //if (!foundUser) {
        const foundUser = await this.userService.getUserById(tokenResponse.id);
        //}
        if (foundUser !== null) {
          const _foundUser = foundUser as UserEntity
          const tokenDecoded:any = this.tokenService.decodeToken(token);
          if (tokenDecoded !== null && 'uat' in tokenDecoded) {
            const uat = tokenDecoded['uat'];
            const isMatch = await this.compare(
              _foundUser.updatedAt as Date,
              uat
            );
            if (isMatch) {
              return foundUser;
            }
          }
        }
      }
      throw new UnauthorizedException();
    } catch (err:any) {
      throw new UnauthorizedException(err.message);
    }
  }

  private toTimestamp = (strDate: Date) => {
    const dt = new Date(strDate).getTime();
    return dt / 1000;
  };

  private compare(date1: Date, date2: Date) {
    return this.toTimestamp(date1) === this.toTimestamp(date2);
  }
}
