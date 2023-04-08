import { CatalogProductsStore } from '@app/frontend/store';
import { TopBarMenuComponent } from '../../components/top-bar-menu/top-bar-menu.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SpinnerCircleComponent } from '@app/frontend/ui';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { CustomerCatalogService } from '@app/frontend/services';


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
export class CatalogContentComponent implements OnInit {
  constructor(
    private catalogService: CustomerCatalogService,
    private catalogProductsStore: CatalogProductsStore
  ) {}

  public productsCount = this.catalogProductsStore.productsCount$;
  public pageParameters = this.catalogProductsStore.pageParameters$;
  public products = this.catalogProductsStore.productsMapped$;
  public loading = this.catalogProductsStore.loading$;

  ngOnInit() {
    this.catalogService.getProducts();
  }

  pageIndexChanged(page: number) {
    window.scroll({ top: 0 });
    this.catalogService.getProducts({ page: page, limit: 40 });
  }
}
