import { Injectable } from '@angular/core';
import { BasketProduct, CustomerProduct, CustomerProductMapped } from '@frontend/models/customer';
import { BasketStore, ProductsStore } from '@frontend/store/customer';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';
import { skip } from 'rxjs/internal/operators/skip';

@Injectable({
  providedIn: 'root',
})
export class CustomerMapProductsService {
  constructor(
    private productsStore: ProductsStore,
    private basketStore: BasketStore
  ) {
    this.subscribeToProductsAndBasketChanged();
  }

  private subscribeToProductsAndBasketChanged() {
    combineLatest([
      this.productsStore.products$.pipe(
        skip(1),
        filter((x: CustomerProduct[]) => x !== null)
      ),
      this.basketStore.basket$.pipe(
        skip(1),
        filter((x) => x !== null)
      ),
    ]).subscribe(([products, basket]) => {
      console.log('subscribeToProductsAndBasketChanged');
      const mappedProducts = this.mapProducts(products, basket);
      this.productsStore.updateMappedProducts(mappedProducts);
    });
  }

  private mapProducts(
    products: CustomerProduct[],
    basket: BasketProduct[]
  ): CustomerProductMapped[] {
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