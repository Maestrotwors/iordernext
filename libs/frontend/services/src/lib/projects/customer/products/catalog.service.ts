import { Injectable } from '@angular/core';
import { CustomerCatalogCategoriesStore, CatalogProductsStore, CatalogSubSuppliersStore } from '@app/frontend/store';
import { HttpService } from '@app/frontend/services';
import {
  IHttpResponse,
  ProductsInfoQuery,
  CustomerSubSupplier,
} from '@app/frontend/models';
import { ApiGetCatalog, ApiGetCategories } from '@app/transport-models/customer';
import { CustomerMapProductsService } from './map-products.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerCatalogService {
  constructor(
    private http: HttpService,
    public CustomerCatalogCategoriesStore: CustomerCatalogCategoriesStore,
    public catalogProductsStore: CatalogProductsStore,
    public catalogSubSuppliersStore: CatalogSubSuppliersStore,
    private mappedProductsService: CustomerMapProductsService
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
      .pipe((source) => this.CustomerCatalogCategoriesStore.trackLoadingPipe(source))
      .subscribe((response: IHttpResponse) => {
        this.CustomerCatalogCategoriesStore.updateCategories(
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
}
