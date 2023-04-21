import { Injectable } from '@angular/core';
import { BasketProduct, CustomerProduct, CustomerProductMapped } from '@frontend/models/customer';
import { BasketStore, ProductsPageInfoStore, ProductsStore } from '@frontend/store/customer';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root',
})
export class CustomerMapProductsService {
  constructor(
    private productsStore: ProductsStore,
    private basketStore: BasketStore,
    private productsPageInfoStore: ProductsPageInfoStore
  ) {
    this.subscribeToProductsAndBasketChanged();
  }

  private subscribeToProductsAndBasketChanged() {
    combineLatest([
      this.productsStore.products$.pipe(filter((x) => x !== null)),
      this.basketStore.basket$.pipe(filter((x) => x !== null)),
    ])
      .pipe(distinctUntilChanged())
      .subscribe(([products, basket]) => {
        console.log('subscribeToProductsAndBasketChanged');
        const mappedProducts = this.mapProducts(products, basket);
        this.productsStore.updateMappedProducts(mappedProducts);
      });
  }

  private mapProducts(
    products: CustomerProduct[] | null,
    basket: BasketProduct[]
  ): CustomerProductMapped[] {
    if (!products) {
      return [];
    }
    const mappedProducts = products.map((product: CustomerProduct) => {
      const foundInBasket = basket.find(
        (item: BasketProduct) => item.productId === product.id
      );
      return {
        ...product,
        inBasket: foundInBasket ? foundInBasket.quantity : 0,
      };
    });

    return mappedProducts;
  }
}