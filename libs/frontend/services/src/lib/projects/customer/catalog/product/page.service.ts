import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterBaseService } from '../../../../core/router/router.base.service';
import { CustomerMapProductService } from './map-product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductPageService extends RouterBaseService {
  constructor(
    router: Router,
    private customerMapProductsService: CustomerMapProductService
  ) {
    super(router);
  }
}
