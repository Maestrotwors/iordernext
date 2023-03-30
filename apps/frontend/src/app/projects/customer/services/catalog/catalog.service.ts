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

  getCatalog() {
    this.http
      .getWithToken$('customer/get-catalog')
      .pipe()
      .subscribe((x) => {
        this.store.catalog.products.next({ ...x.data, loading: false });
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

  toCatalog() {
    this.router.navigateByUrl('member-user/catalog');
  }
}
