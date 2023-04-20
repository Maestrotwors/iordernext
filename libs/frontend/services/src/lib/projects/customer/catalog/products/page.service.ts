import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterBaseService } from '../../../../core/router/router.base.service';
import { CustomerMapProductsService } from './map-products';

@Injectable({
  providedIn: 'root',
})
export class ProductsPageService extends RouterBaseService {
  constructor(
    router: Router,
    private customerMapProductsService: CustomerMapProductsService
  ) {
    super(router);
  }
}
