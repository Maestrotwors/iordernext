import { Observable } from 'rxjs//internal/Observable';
import { CustomerCatalogProductStore } from '@app/frontend/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '@app/frontend/models';
import { HttpService } from '@app/frontend/services';
import { ApiGetProduct, ApiRequestSaveInBasket } from '@app/transport-models/customer';
import { CustomerMapProductService } from './map-product.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductService {
  constructor(
    private router: Router,
    private http: HttpService,
    private catalogProductStore: CustomerCatalogProductStore,
    private mappedProductService: CustomerMapProductService
  ) {}

  selectProduct(id: number) {
    this.router.navigateByUrl('member-user/catalog/product/' + id);
  }

  getProduct(id: number): void {
    this.http
      .getWithToken$('customer/get-product/' + id)
      .pipe((source: Observable<IHttpResponse>) =>
        this.catalogProductStore.trackLoadingPipe(source)
      )
      .subscribe((response: IHttpResponse) => {
        this.catalogProductStore.updateProduct(<ApiGetProduct>response.data);
      });
  }

  saveInBasket(productId: number, count: number) {
    const postData: ApiRequestSaveInBasket = { productId, count };
    this.http
      .postWithToken$('customer/save-in-basket', postData)
      .subscribe((response: IHttpResponse) => {
        //this.catalogProductStore.updateProduct(<--->response.data);
      });
  }
}
