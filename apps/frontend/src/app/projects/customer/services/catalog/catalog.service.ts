import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StoreService } from '@app-services/store/store/store.service';
import { HttpService } from '@app-services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private store = this.storeService.store.account;
  constructor(
    private http: HttpService,
    private storeService: StoreService,
    private router: Router
  ) {}

  getCatalog(query: any = {}) {
    query = { limit: 40, page: 1, ...query};
    this.store.catalog.products.next({ loading: true });
    this.http
      .getWithToken$('customer/get-catalog', query)
      .pipe()
      .subscribe((x) => {
        this.store.catalog.products.next({
          ...x.data,
          page: query['page'],
          loading: false,
        });
      });
  }

  getCategories() {
    this.http.getWithToken$('customer/get-categories').subscribe((x) => {
      this.store.catalog.categories.next({
        categories: x.data,
        loading: false,
      });
    });
  }

  getSubSuppliers() {
    this.http.getWithToken$('customer/get-sub-suppliers').subscribe((x) => {
      this.store.catalog.subSuppliers.next({
        subSuppliers: x.data,
        loading: false,
      });
    });
  }

  toCatalog() {
    this.router.navigateByUrl('member-user/catalog');
  }
}
