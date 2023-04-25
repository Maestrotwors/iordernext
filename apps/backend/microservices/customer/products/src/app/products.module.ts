import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { ProductsService } from './services/catalog/products.service';
import { ProductService } from './services/product/product.service';
import { PrismaService } from '@backend/repository';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    PrismaService, 
    ProductsService,
    ProductService,
    CategoriesService,
  ],
})
export class ProductsModule {}
