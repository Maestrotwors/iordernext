import { TopBarMenuComponent } from '../../components/top-bar-menu/top-bar-menu.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerCircleComponent } from '@frontend/ui';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { ProductsStore } from '@frontend/store/customer';


@Component({
  selector: 'app-catalog-content',
  standalone: true,
  imports: [
    CommonModule,
    ProductsListViewComponent,
    ProductsBlockViewComponent,
    CatalogPaginationComponent,
    TopBarMenuComponent,
    SpinnerCircleComponent,
  ],
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogContentComponent {
  constructor(private productsStore: ProductsStore) {}

  products = this.productsStore.products$
}
