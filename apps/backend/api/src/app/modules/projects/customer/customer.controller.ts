import { Controller, Get, OnModuleDestroy, OnModuleInit, Query } from '@nestjs/common';

import { ApiRequestGetBasketQuery } from '@api-models/customer/basket';
import {
  Client,
  ClientKafka,
  Transport,
} from '@nestjs/microservices';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { BasketService } from './services/basket/basket.service';
import { ROUTE_CUSTOMER } from '@api-models/shared/route';
import {
  ApiRequestGetCategoriesQueryValidator,
  ApiRequestGetProductQueryValidator,
  ApiRequestGetProductsQueryValidator,
  ApiRequestGetOrderQueryValidator
} from '@backend/models/core/validators/customer';
import { Auth } from '../../../decorators/auth.decorator';
import { Role } from '@api-models/shared/auth';
import { env } from '@config/dev.env';
import {
  MsProductsRequestGetProducts,
  MsProductsResponseGetProducts,
  MsProductsRequestGetProduct,
  MsProductsRequestGetCategories,
  MsProductsResponseGetCategories,
} from '@backend/microservices-models/customer/products';

@Controller()
export class CustomerController implements OnModuleInit, OnModuleDestroy {
  constructor(
    private suppliersService: SuppliersService,
    private basketService: BasketService
  ) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'client_api',
        brokers: [`${env.KAFKA_HOST}:${env.KAFKA_PORT}`],
      },
      consumer: {
        groupId: 'hero-consumer-1',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('get-products');
    this.client.subscribeToResponseOf('get-product');
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  @Get(ROUTE_CUSTOMER.GetSuppliers)
  @Auth([Role.Customer])
  getSuppliers() {
    return this.suppliersService.getSuppliers();
  }

  @Get(ROUTE_CUSTOMER.GetCatalog)
  @Auth([Role.Customer])
  getCatalog(@Query() query: ApiRequestGetProductsQueryValidator) {
    return new Promise((resolve) => {
      this.client
        .send(
          'get-products',
          JSON.stringify(<MsProductsRequestGetProducts>query)
        )
        .subscribe((response: MsProductsResponseGetProducts) => {
          resolve(response);
        });
    });
    //return await this.productsService.getProducts(query);
  }

  @Get(ROUTE_CUSTOMER.GetBasket)
  @Auth([Role.Customer])
  async getBasket(@Query() query: ApiRequestGetBasketQuery) {
    return await this.basketService.getBasket();
  }

  @Get(ROUTE_CUSTOMER.GetProduct)
  @Auth([Role.Customer])
  getProduct(@Query() query: ApiRequestGetProductQueryValidator) {
    return new Promise((resolve) => {
      this.client
        .send('get-product', JSON.stringify(<MsProductsRequestGetProduct>query))
        .subscribe((response: MsProductsResponseGetProducts) => {
          resolve(response);
        });
    });
    //return await this.productService.getProduct(query);
  }

  @Get(ROUTE_CUSTOMER.GetOrder)
  @Auth([Role.Customer])
  getOrder(@Query() query: ApiRequestGetOrderQueryValidator) {
    console.log(query);
    /*return new Promise((resolve) => {
      this.client
        .send('get-orders', JSON.stringify(<MsProductsRequestGetOrder>query))
        .subscribe((response: MsProductsResponseGetOrder) => {
          resolve(response);
        });
    });*/
    //return await this.productService.getProduct(query);
  }

  @Get(ROUTE_CUSTOMER.GetCategories)
  @Auth([Role.Customer])
  getCategories(@Query() query: ApiRequestGetCategoriesQueryValidator) {
    /*return new Promise((resolve) => {
      this.client
        .send(
          'get-categories',
          JSON.stringify(<MsProductsRequestGetCategories>query)
        )
        .subscribe((response: MsProductsResponseGetCategories) => {
          resolve(response);
        });
    });*/
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
