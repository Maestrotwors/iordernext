import { CustomerController } from './customer.controller';
import { Module } from '@nestjs/common';
import { SuppliersService } from './services/suppliers/suppliers.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [SuppliersService],
  exports: [SuppliersService],
})
export class CustomerModule {}

