import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CacheModule } from "@be-cache";
import { DateService } from '@base/libs/backend/system/src/lib/date.service';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PrismaModule } from "@be-repository";
import { PrismaService } from '@be-repository/services/prisma.service';
import { SystemModule } from '@be-system';
import { TokenService } from './token.service';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './user.service';

@Module({
	controllers: [AuthController],
	providers: [AuthService, TokenService, UserService, UserRepository, PrismaService, DateService],
	imports: [SystemModule, JwtModule.register({}), PrismaModule, CacheModule],
	exports: [AuthService]
})
export class AuthModule {}
