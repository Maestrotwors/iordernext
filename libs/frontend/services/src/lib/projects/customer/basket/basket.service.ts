import { Injectable } from '@angular/core';
import { IHttpResponse } from '@app/frontend/models';
import { HttpService } from '@app/frontend/services';
import { BasketStore } from '@app/frontend/store';
import { ApiGetBasket } from '@app/transport-models/customer';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CustomerBasketProductsService {
  constructor(private http: HttpService, private basketStore: BasketStore) {}

  getMyBasket() {
    this.http
      .getWithToken$('customer/get-basket')
      .pipe((source: Observable<IHttpResponse>) =>
        this.basketStore.trackLoadingPipe(source)
      )
      .subscribe((response: IHttpResponse) => {
        this.basketStore.updateBasket(<ApiGetBasket>response.data);
        console.log(response);
      });
  }
}
