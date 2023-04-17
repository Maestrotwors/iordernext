import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { AuthModule as Auth } from '@backend/auth';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [Auth],
  exports: [],
})
export class AuthModule {}
