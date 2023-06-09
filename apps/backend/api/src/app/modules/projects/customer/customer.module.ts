import { PrismaService } from '@backend/repository';
import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { BasketService } from './services/basket/basket.service';
import { ProductsService } from './services/catalog/products.service';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { ProductService } from './services/product/product.service';
import { AuthModule } from '@backend/auth';

@Module({
  controllers: [CustomerController],
  providers: [
    PrismaService,
    SuppliersService,
    ProductsService,
    BasketService,
    ProductService,
  ],
  imports: [AuthModule],
})
export class CustomerModule {}
