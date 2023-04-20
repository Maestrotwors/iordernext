import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';
import { ProductsRouteService } from '@frontend/services/projects/customer/catalog-products';

@UntilDestroy()
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [SideBarMenuComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productsRouteService: ProductsRouteService
  ) {}

  ngOnInit() {
    this.subscribeToRouteChange();
  }

  subscribeToRouteChange() {
    this.route.queryParams
      .pipe(untilDestroyed(this))
      .subscribe((queryParams) => {
        this.productsRouteService.queryParamsChanged(queryParams);
      });
  }
}
