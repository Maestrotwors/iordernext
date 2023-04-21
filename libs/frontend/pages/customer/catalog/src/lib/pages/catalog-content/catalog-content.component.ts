import { TopBarMenuComponent } from '../../components/top-bar-menu/top-bar-menu.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SpinnerCircleComponent } from '@frontend/ui';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { ProductsPageInfoStore, ProductsStore } from '@frontend/store/customer';
import { ProductsPageService, ProductsRouteService } from '@frontend/services/projects/customer/catalog/products';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
    private productsStore: ProductsStore,
    private productsPageInfoStore: ProductsPageInfoStore,
    private productsPageService: ProductsPageService,
    private route: ActivatedRoute,
    private productsRouteService: ProductsRouteService
  ) {}

  products = this.productsStore.productsMapped$;
  totalCountProducts = this.productsStore.totalCountProducts$;
  pageQueryParams = this.productsPageInfoStore.pageQueryParams$;

  ngOnInit() {
    this.subscribeToRouteChange();
  }

  pageIndexChanged(pageIndex: number) {
    this.productsPageService.navigateWithQueryParams({ page: pageIndex });
  }

  private subscribeToRouteChange() {
    this.route.queryParams
      .pipe(untilDestroyed(this))
      .subscribe((queryParams) => {
        this.productsRouteService.queryParamsChanged(queryParams);
      });
  }
}
