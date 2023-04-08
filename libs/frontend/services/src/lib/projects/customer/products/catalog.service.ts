import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CatalogCategoriesStore, CatalogProductsStore, CatalogSubSuppliersStore } from '@app/frontend/store';
import { HttpService } from '@app/frontend/services';
import {
  IHttpResponse,
  ProductsInfoQuery,
  CustomerSubSupplier,
} from '@app/frontend/models';
import { ApiGetCatalog, ApiGetCategories } from '@app/transport-models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerCatalogService {

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
      .subscribe((response: IHttpResponse) => {
        this.catalogProductsStore.updateProducts(
          <ApiGetCatalog>response.data,
          query
        );
      });
  }

  getCategories() {
    this.http
      .getWithToken$('customer/get-categories')
      .pipe((source) => this.catalogCategoriesStore.trackLoadingPipe(source))
      .subscribe((response: IHttpResponse) => {
        this.catalogCategoriesStore.updateCategories(
          <ApiGetCategories>response.data
        );
      });
  }

  getSubSuppliers() {
    this.http
      .getWithToken$('customer/get-sub-suppliers')
      .pipe((source) => this.catalogSubSuppliersStore.trackLoadingPipe(source))
      .subscribe((response: IHttpResponse) => {
        this.catalogSubSuppliersStore.updateSubSuppliers(
          <CustomerSubSupplier[]>response.data
        );
      });
  }

  toCatalog() {
    this.router.navigateByUrl('member-user/catalog');
  }
}
