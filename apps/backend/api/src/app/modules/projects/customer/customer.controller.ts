import { Controller, Get, Query } from '@nestjs/common';

import { ApiRequestGetProductsQuery } from '@api-models/customer/catalog';
import { ApiRequestGetBasketQuery } from '@api-models/customer/basket';

import { ProductsService } from './services/catalog/products.service';
import { ProductService } from './services/product/product.service';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { BasketService } from './services/basket/basket.service';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import { ApiRequestGetProductQuery } from '@api-models/customer/product';
@Controller()
export class CustomerController {
  constructor(
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private basketService: BasketService,
    private productService: ProductService
  ) {}

  @Get(ROUTE_CUSTOMER.GetSuppliers)
  async getSuppliers() {
    return await this.suppliersService.getSuppliers();
  }

  @Get(ROUTE_CUSTOMER.GetCatalog)
  async getCatalog(@Query() query: ApiRequestGetProductsQuery) {
    return await this.productsService.getProducts(query);
  }

  @Get(ROUTE_CUSTOMER.GetCategories)
  async getCategories() {
    //return await this.categoryService.getCategories();
  }

  @Get(ROUTE_CUSTOMER.GetBasket)
  async getBasket(@Query() query: ApiRequestGetBasketQuery) {
    return await this.basketService.getBasket();
  }

  @Get(ROUTE_CUSTOMER.GetProduct)
  async getProduct(@Query() query: ApiRequestGetProductQuery) {
    return await this.productService.getProduct(query);
  }

  /*
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
  async saveInBasket(@Req() request, @Body() body: ApiRequestSaveInBasket) {
    return await this.basketService.saveInBasket(request.user.id, body);
  } */
}
