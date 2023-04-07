import { Product } from '../interfaces/product';
import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { selectAllEntities, setEntities, withEntities } from '@ngneat/elf-entities';

import { BaseStore } from '@base/apps/frontend/src/app/shared/store/base.store';

@Injectable({
  providedIn: 'root',
})
export class CatalogStoreService extends BaseStore {
  private catalogStore = createStore(
    { name: 'catalog' },
    withEntities<Product>()
  );

  private productsCountStore = createStore(
    { name: 'catalog' },
    with
  );

  products$ = this.catalogStore.pipe(selectAllEntities());
  productsCount$ = this.productsCountStore.pipe(selectAllEntities());

  updateProducts(products: Product[]) {
    this.catalogStore.update(setEntities(products));
  }
}






