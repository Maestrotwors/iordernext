import { TopBarMenuComponent } from '../../components/top-bar-menu/top-bar-menu.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';
import { CatalogPaginationComponent } from './components/catalog-pagination/catalog-pagination.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProductsService } from './services/products.service';
import { CatalogQueryParams } from '@frontend/projects/customer/models';
import { ProductsStore } from './store/products.store';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { ProductsPageInfoStore } from './store/page-info.store';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { SpinnerCircleComponent } from '@frontend/core/ui/components/spinners/spinner-circle';

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
    SpinnerCircleComponent
  ],
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogContentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private productsStore: ProductsStore,
    private productsPageInfoStore: ProductsPageInfoStore
  ) {}

  products = this.productsStore.productsMapped$;
  productsLoading = this.productsStore.productsLoading$;
  totalCountProducts = this.productsStore.totalCountProducts$;
  pageQueryParams: Observable<CatalogQueryParams | null> =
    this.productsPageInfoStore.pageQueryParams$;

  ngOnInit() {
    this.subscribeToRouteChange();
    this.subscribeToProductsAndBasketChanged();
  }

  pageIndexChanged(pageIndex: number) {
    this.router.navigate([], {
      queryParams: { page: pageIndex },
      queryParamsHandling: 'merge',
    });
  }

  private subscribeToRouteChange() {
    this.route.queryParams
      .pipe(
        untilDestroyed(this),
        distinctUntilChanged(),
        switchMap((queryParams: Params) => {
          this.productsPageInfoStore.updatePage(queryParams);
          return this.productsService.getProducts(queryParams);
        })
      )
      .subscribe(() => {
        this.scrollTop();
      });
  }

  private subscribeToProductsAndBasketChanged() {
    this.productsService
      .productsAndBasketChanged()
      .pipe(untilDestroyed(this), distinctUntilChanged())
      .subscribe();
  }

  private scrollTop() {
    window.scroll({
      top: 0,
    });
  }
}
