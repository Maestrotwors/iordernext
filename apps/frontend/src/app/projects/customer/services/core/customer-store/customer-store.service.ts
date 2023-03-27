import { Injectable } from '@angular/core';
import { StoreService } from '../../../../../services/core/store/store/store.service';

@Injectable()
export class CustomerStoreService {
  constructor(storeService: StoreService) {
    storeService.store.account = {
      param: 'value'
    };
    console.log(storeService.store);
  }
}
