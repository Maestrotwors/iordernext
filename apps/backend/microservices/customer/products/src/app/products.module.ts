import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { ProductsService } from './services/catalog/products.service';
import { ProductService } from './services/product/product.service';
import { PrismaService } from '@backend/repository';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ProductService, PrismaService],
})
export class ProductsModule {}
