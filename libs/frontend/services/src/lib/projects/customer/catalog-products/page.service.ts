import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterBaseService } from '../../../core/router/router.base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsPageService extends RouterBaseService {
  constructor(router: Router) {
    super(router);
  }

}
