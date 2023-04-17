import { PrismaService } from '@backend/repository';
import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { SuppliersService } from './services/suppliers/suppliers.service';

@Module({
  controllers: [CustomerController],
  providers: [PrismaService, SuppliersService],
})
export class CustomerModule {}
