import {
  CustomerBasketProduct,
  CustomerProductMapped,
  CustomerProduct,
} from '@app/frontend/models';
import { Injectable } from '@angular/core';
import { BasketStore, CatalogProductsStore } from '@app/frontend/store';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { filter } from 'rxjs/internal/operators/filter';


@Injectable({
  providedIn: 'root',
})
export class CustomerMapProductsService {
  constructor(
    private catalogProductsStore: CatalogProductsStore,
    private basketStore: BasketStore,
    private productsStore: CatalogProductsStore
  ) {
    this.subscribeToProductsAndBasketChanged();
  }

  private subscribeToProductsAndBasketChanged() {
    combineLatest([
      this.catalogProductsStore.products$.pipe(filter(x => x !== null)),
      this.basketStore.basket$.pipe(filter(x => x !== null)),
    ]).subscribe(([products, basket]) => {
      const mappedProducts = this.mapProducts(products, basket);
      this.productsStore.updateMappedProducts(mappedProducts);
    });
  }

  private mapProducts(
    products: CustomerProduct[],
    basket: CustomerBasketProduct[]
  ): CustomerProductMapped[] {
    const mappedProducts = products.map((product: CustomerProduct) => {
      const foundInBasket = basket.find(
        (item: CustomerBasketProduct) => item.productId === product.id
      );
      return {
        ...product,
        inBasket: foundInBasket ? foundInBasket.quantity : 0,
      };
    });

    return mappedProducts;
  }
}
