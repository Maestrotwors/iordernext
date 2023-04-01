import { HttpService } from '@app-services/http/http.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { StoreService } from '@app-services/store/store/store.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private router: Router,
    private http: HttpService,
    private storeService: StoreService
  ) {}

  selectProduct(id: number) {
    this.router.navigateByUrl('member-user/catalog/product/' + id);
  }

  getProduct(id: number) {
    this.http.getWithToken$('customer/get-product/' + id).pipe().subscribe((data) => {
      this.storeService.store.account.product.next({
        product: data.data,
        loading: false,
      });
    });
  }
}
