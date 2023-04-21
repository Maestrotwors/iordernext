import { Injectable } from '@angular/core';
import {
  BasketProduct,
  CustomerCurrentProduct,
  CustomerCurrentProductMapped,
} from '@frontend/models/customer';
import { BasketStore, ProductStore } from '@frontend/store/customer';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root',
})
export class CustomerMapProductService {
  constructor(
    private productStore: ProductStore,
    private basketStore: BasketStore
  ) {
    this.subscribeToProductAndBasketChanged();
  }

  private subscribeToProductAndBasketChanged(): void {
    combineLatest([
      this.productStore.product$.pipe(
        filter(
          (
            product: CustomerCurrentProduct | null
          ): product is CustomerCurrentProduct => product !== null
        )
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
    basket: BasketProduct[]
  ): CustomerCurrentProductMapped {
    const foundInBasket = basket.find(
      (item: BasketProduct) => item.productId === product.id
    );
    return {
      ...product,
      inBasket: foundInBasket ? foundInBasket.quantity : 0,
    };
  }
}
