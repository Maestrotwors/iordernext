import { Injectable } from '@angular/core';
import { StoreService } from '../../../../../services/core/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class CustomerStoreService {
  constructor(storeService: StoreService) {
    storeService.store.account = {
      catalog: {
        products: new BehaviorSubject({ loading: true }),
        categories: new BehaviorSubject({ loading: true }),
      },
      suppliers: new BehaviorSubject({ loading: true }),
      product: new BehaviorSubject({ loading: true }),
      order: {},
      selectedProduct: {},
    };
    console.log(storeService.store);
  }
}
