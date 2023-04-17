
import { AuthBaseService } from './services/core/auth-base.service';
import { UserService } from './services/core/user.service';
import { Module } from '@nestjs/common';
import { LogInService } from './services/log-in.service';
import { UserRepository } from './services/repositories/user.repository';
import { TokenService } from './services/core/token.service';
import { PrismaService } from '@backend/repository';
import { JwtService } from '@nestjs/jwt';
import { DateService } from '@backend/helpers';
import { RefreshTokenService } from './services/refresh-token.service';

@Module({
  providers: [
    LogInService,
    RefreshTokenService,
    UserService,
    AuthBaseService,
    UserRepository,
    TokenService,
    PrismaService,
    JwtService,
    DateService,
  ],
  exports: [LogInService, RefreshTokenService],
})
export class AuthModule {}
