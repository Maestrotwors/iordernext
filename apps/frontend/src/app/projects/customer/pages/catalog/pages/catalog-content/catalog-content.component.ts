import { TopBarMenuComponent } from './../../components/top-bar-menu/top-bar-menu.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { CatalogService } from '../../../../services/catalog/catalog.service';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

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
    private storeService: StoreService
  ) {}

  public products: BehaviorSubject<any> =
    this.storeService.store.account.catalog.products;

  pageIndexChanged(page: number) {
    window.scroll({ top: 0 });
    this.catalogService.getCatalog({ page: page });
  }
}
