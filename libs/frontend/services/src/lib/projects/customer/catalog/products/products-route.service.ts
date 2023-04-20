import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ProductsApiService } from './products.api.service';
import { BasketService } from '../../basket/basket.service';
import { ProductsPageInfoStore } from '@frontend/store/customer';

@Injectable({
  providedIn: 'root',
})
export class ProductsRouteService {
  constructor(
    private productsApiService: ProductsApiService,
    private basketService: BasketService,
    private productsPageInfoStore: ProductsPageInfoStore
  ) {}

  queryParamsChanged(queryParams: Params) {
    this.productsPageInfoStore.updatePage(queryParams);
    this.productsApiService.getProducts(queryParams);
    this.basketService.getBasket();
  }

  catalogIdChanged(catalogId: string) {}
}
