import { Injectable } from '@angular/core';
import { StoreService } from '@app-services/store/store/store.service';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root',
})
export class CatalogMapService {
  /*
  private products = this.storeService.store.account.products?.pipe(
    filter((x: any) => x.loading === false)
  );
  private basket = this.storeService.store.account.basket?.pipe(
    filter((x: any) => x.loading === false)
  );

  constructor(private storeService: StoreService) {
    combineLatest(this.products, this.basket).subscribe((data: any) => {
      console.log(data[0]);
      console.log(data[1]);
    });
  }*/
}
