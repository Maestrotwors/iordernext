import { Injectable } from '@angular/core';
import { ProductPageInfoStore } from '@frontend/store/customer';
import { ProductApiService } from './product.api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductRouteService {
  constructor(
    private productApiService: ProductApiService,
    private productPageInfoStore: ProductPageInfoStore
  ) {}

  productParamsChanged(params: object) {
    this.productPageInfoStore.updatePage(params);
    this.productApiService.getProduct(params);
  }
}
