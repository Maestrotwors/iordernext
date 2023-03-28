import { Injectable } from '@angular/core';
import { StoreService } from '@app-services/store/store/store.service';
import { HttpService } from '@app-services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private store = this.storeService.store.account;
  constructor(private http: HttpService, private storeService: StoreService) { }

  async getCatalog() {
    this.http.getWithToken$('customer/get-catalog').pipe(

    ).subscribe(x => {
      this.store.catalog.products.next(x.data);
      console.log(this.storeService.store);
    });
  }
}
