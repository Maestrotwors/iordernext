import { Controller, Get, Param, Post, Query, Body, Req, HttpCode } from '@nestjs/common';

import { Auth } from '../../../decorators/auth.decorator';
import { Role } from '@base/libs/backend/models/src/lib/auth/roles';

import { SuppliersService } from './services/suppliers/suppliers.service';
import { ProductsService } from './services/catalog/products.service';
import { CategoryService } from './services/catalog/category.service';
import { ProductService } from './services/product/product.service';
import { SubSuppliersService } from './services/subsuppliers/subsuppliers.service';
import { BasketService } from './services/basket/basket.service';

@Controller('customer')
export class CustomerController {
  constructor(
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private subSuppliersService: SubSuppliersService,
    private basketService: BasketService
  ) {}

  @Get('get-suppliers')
  @Auth([Role.Customer])
  async getSuppliers() {
    return await this.suppliersService.getSuppliers();
  }

  @Get('get-catalog')
  @Auth([Role.Customer])
  async getCatalog(@Query() query) {
    return await this.productsService.getProducts(query);
  }

  @Get('get-categories')
  @Auth([Role.Customer])
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  // TODO add class validator, SQL injection protection
  @Get('get-product/:id')
  @Auth([Role.Customer])
  async getProductById(@Param('id') id: number) {
    return await this.productService.getProductById(id);
  }

  @Get('get-sub-suppliers')
  @Auth([Role.Customer])
  async getSubSuppliers() {
    return await this.subSuppliersService.getSubSuppliers();
  }

  @Get('get-basket')
  @Auth([Role.Customer])
  async getBasket(@Query() query) {
    return await this.basketService.getMyBasket(1, query);
  }

  @Post('save-in-basket')
  @HttpCode(200)
  @Auth([Role.Customer])
  async saveInBasket(@Req() request, @Body() body) {
    return await this.basketService.saveInBasket(request.user.id, body);
  }
}
