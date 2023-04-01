import { AuthModule } from '../../core/auth/auth.module';
import { CustomerController } from './customer.controller';
import { Module } from '@nestjs/common';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { ProductsService } from './services/catalog/products.service';
import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { CategoryService } from './services/catalog/category.service';
import { ProductService } from './services/product/product.service';
import { SubSuppliersService } from './services/subsuppliers/subsuppliers.service';

@Module({
  imports: [AuthModule],
  controllers: [CustomerController],
  providers: [
    SuppliersService,
    ProductsService,
    ProductService,
    PrismaService,
    CategoryService,
    SubSuppliersService
  ],
  exports: [],
})
export class CustomerModule {}

