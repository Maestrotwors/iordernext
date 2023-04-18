import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ProductsService } from './products.service';
import { BasketService } from '../basket/basket.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsRouteService {
  constructor(private productsService: ProductsService, private basketService: BasketService) {}

  queryParamsChanged(queryParams: Params) {
    this.productsService.getProducts(queryParams);
    this.basketService.getBasket();
  }

  catalogIdChanged(catalogId: string) {}
}
