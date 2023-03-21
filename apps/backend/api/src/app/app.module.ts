import { AuthModule } from './modules/core/auth/auth.module';
import { CustomerModule } from './modules/projects/customer/customer.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
