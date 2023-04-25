import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  MsProductsRequestGetProducts,
  MsProductsRequestGetProduct,
  MsProductsRequestGetCategories,
} from '@backend/microservices-models/customer/products';
import { ProductsService } from './services/catalog/products.service';
import { ProductService } from './services/product/product.service';
import { CategoriesService } from './services/categories/categories.service';

@Controller()
export class ProductsController {
  constructor(
    private productsService: ProductsService,
    private productService: ProductService,
    private categoriesService: CategoriesService
  ) {}

  @MessagePattern('get-products')
  async getProducts(@Payload() message: any) {
    try {
      const msg: MsProductsRequestGetProducts =
        message as MsProductsRequestGetProducts;
      return await this.productsService.getProducts(msg);
    } catch (e) {
      return e;
    }
  }

  @MessagePattern('get-product')
  async getProduct(@Payload() message: any) {
    try {
      const msg: MsProductsRequestGetProduct =
        message as MsProductsRequestGetProduct;
      return await this.productService.getProduct(msg);
    } catch (e) {
      return e;
    }
  }

  @MessagePattern('get-categories')
  async getCategories(@Payload() message: any) {
    try {
      const msg: MsProductsRequestGetCategories =
        message as MsProductsRequestGetCategories;
      return await this.categoriesService.getCategories(msg);
    } catch (e) {
      return e;
    }
  }
}
