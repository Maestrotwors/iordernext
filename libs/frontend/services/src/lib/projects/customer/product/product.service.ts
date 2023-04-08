import { Observable } from 'rxjs//internal/Observable';
import { CustomerCatalogProductStore } from '@app/frontend/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { IHttpResponse } from '@app/frontend/models';
import { HttpService } from '@app/frontend/services';
import { ApiGetProduct } from '@app/transport-models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerProductService {
  constructor(
    private router: Router,
    private http: HttpService,
    private catalogProductStore: CustomerCatalogProductStore
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
}
