import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CatalogCategoriesStore, CatalogProductsStore, CatalogSubSuppliersStore } from '@app/frontend/store';
import { HttpService } from '@app/frontend/core/http';
import { ProductsInfoQuery } from './interfaces/products-info-query';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  //private store = this.storeService.store.account;
  constructor(
    private http: HttpService,
    public catalogCategoriesStore: CatalogCategoriesStore,
    public catalogProductsStore: CatalogProductsStore,
    public catalogSubSuppliersStore: CatalogSubSuppliersStore,
    private router: Router
  ) {}

  getProducts(query: ProductsInfoQuery = { limit: 40, page: 1 }) {
    this.http
      .getWithToken$('customer/get-catalog', query)
      .pipe((source) => this.catalogProductsStore.trackLoadingPipe(source))
      .subscribe((x: any) => {
        this.catalogProductsStore.updateProducts(x.data, query);
      });
  }

  getCategories() {
    this.http
      .getWithToken$('customer/get-categories')
      .pipe((source) => this.catalogCategoriesStore.trackLoadingPipe(source))
      .subscribe((x: any) => {
        this.catalogCategoriesStore.updateCategories(x.data);
      });
  }

  getSubSuppliers() {
    this.http
      .getWithToken$('customer/get-sub-suppliers')
      .pipe((source) => this.catalogSubSuppliersStore.trackLoadingPipe(source))
      .subscribe((x: any) => {
        this.catalogSubSuppliersStore.updateSubSuppliers(x.data);
      });
  }

  toCatalog() {
    this.router.navigateByUrl('member-user/catalog');
  }
}
