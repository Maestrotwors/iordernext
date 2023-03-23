import { AuthModule } from '../../core/auth/auth.module';
import { CustomerController } from './customer.controller';
import { Module } from '@nestjs/common';
import { SuppliersService } from './services/suppliers/suppliers.service';

@Module({
  imports: [AuthModule],
  controllers: [CustomerController],
  providers: [SuppliersService],
  exports: [SuppliersService],
})
export class CustomerModule {}

