import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
//import { StoreService } from '@app-services/store/store/store.service';
import { HttpService } from '@app/frontend/core/http';
//import { CatalogStore } from '../../pages/catalog/store/catalog.store';
import { ProductsInfoQuery } from './interfaces/products-info-query';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  //private store = this.storeService.store.account;
  constructor(
    private http: HttpService,
    //private storeService: StoreService,
    private router: Router,
    //private catalogStore: CatalogStore
  ) {}

  getCatalog(query: ProductsInfoQuery = { limit: 40, page: 1 }) {
    this.http
      .getWithToken$('customer/get-catalog', query)
      //.pipe((source) => this.catalogStore.trackLoadingPipe(source))
      .subscribe((x: any) => {
        //this.catalogStore.updateProducts(x.data, query);
      });
  }

  getCategories() {
    this.http.getWithToken$('customer/get-categories').subscribe((x) => {
      /*this.store.catalog.categories.next({
        categories: x.data,
        loading: false,
      });*/
    });
  }

  getSubSuppliers() {
    this.http.getWithToken$('customer/get-sub-suppliers').subscribe((x) => {
      /*this.store.catalog.subSuppliers.next({
        subSuppliers: x.data,
        loading: false,
      });*/
    });
  }

  toCatalog() {
    this.router.navigateByUrl('member-user/catalog');
  }
}
