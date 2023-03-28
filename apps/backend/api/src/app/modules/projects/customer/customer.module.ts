import { AuthModule } from '../../core/auth/auth.module';
import { CustomerController } from './customer.controller';
import { Module } from '@nestjs/common';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { CatalogService } from './services/catalog/catalog.service';

@Module({
  imports: [AuthModule],
  controllers: [CustomerController],
  providers: [SuppliersService, CatalogService],
  exports: [],
})
export class CustomerModule {}

