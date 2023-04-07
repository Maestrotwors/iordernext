import { CatalogProductsStore } from '@app/frontend/store';
import { TopBarMenuComponent } from '../../components/top-bar-menu/top-bar-menu.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { CatalogService } from '@app/frontend/projects/customer/services/catalog';


@Component({
  selector: 'app-catalog-content',
  standalone: true,
  imports: [
    CommonModule,
    ProductsListViewComponent,
    ProductsBlockViewComponent,
    CatalogPaginationComponent,
    TopBarMenuComponent,
  ],
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogContentComponent {
  constructor(
    private catalogService: CatalogService,
    private catalogProductsStore: CatalogProductsStore
  ) {}

  public productsCount = this.catalogProductsStore.productsCount$;
  public pageParameters = this.catalogProductsStore.pageParameters$;
  public loading = this.catalogProductsStore.loading$;

  pageIndexChanged(page: number) {
    window.scroll({ top: 0 });
    this.catalogService.getProducts({ page: page, limit: 40 });
  }
}
