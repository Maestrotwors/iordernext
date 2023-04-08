import { Observable } from 'rxjs//internal/Observable';
import {
  CustomerBasketProduct,
  CustomerProductMapped,
  CustomerCurrentProduct,
} from '@app/frontend/models';
import { Injectable } from '@angular/core';
import { BasketStore, CustomerCatalogProductStore } from '@app/frontend/store';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root',
})
export class CustomerMapProductService {
  constructor(
    private catalogProductStore: CustomerCatalogProductStore,
    private basketStore: BasketStore,
    private productStore: CustomerCatalogProductStore
  ) {
    this.subscribeToProductsAndBasketChanged();
  }

  private subscribeToProductsAndBasketChanged(): void {
    combineLatest([
      this.catalogProductStore.product$.pipe(
        filter((product: CustomerCurrentProduct | null): product is CustomerCurrentProduct => product !== null)
      ),
      this.basketStore.basket$.pipe(filter((x) => x !== null)),
    ]).subscribe(([product, basket]) => {
      const mappedProduct = this.mapProduct(product, basket);
      console.log(mappedProduct);
      this.productStore.updateMappedProduct(mappedProduct);
    });
  }

  private mapProduct(
    product: CustomerCurrentProduct,
    basket: CustomerBasketProduct[]
  ): CustomerProductMapped {
    const foundInBasket = basket.find(
      (item: CustomerBasketProduct) => item.productId === product.id
    );
    return {
      ...product,
      inBasket: foundInBasket ? foundInBasket.quantity : 0,
    };
  }
}
