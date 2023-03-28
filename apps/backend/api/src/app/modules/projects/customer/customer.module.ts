import { AuthModule } from '../../core/auth/auth.module';
import { CustomerController } from './customer.controller';
import { Module } from '@nestjs/common';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { CatalogService } from './services/catalog/catalog.service';
import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [CustomerController],
  providers: [SuppliersService, CatalogService, PrismaService],
  exports: [],
})
export class CustomerModule {}

