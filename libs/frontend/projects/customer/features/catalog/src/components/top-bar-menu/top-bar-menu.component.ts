import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsCountComponent } from './components/view-products-count/view-products-count.component';
import { ProductsCountComponent } from './components/products-count/products-count.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './components/title/title.component';
import { FiltersComponent } from './components/filters/filters.component';
import { OrderUnitsComponent } from './components/order-units/order-units.component';
import { ViewsComponent } from './components/views/views.component';
import { VirtualDiscountComponent } from './components/virtual-discount/virtual-discount.component';
import { SortComponent } from './components/sort/sort.component';

@Component({
  selector: 'app-top-bar-menu',
  standalone: true,
  imports: [
    CommonModule,
    ViewProductsCountComponent,
    ProductsCountComponent,
    BreadcrumbsComponent,
    TitleComponent,
    FiltersComponent,
    OrderUnitsComponent,
    ViewsComponent,
    VirtualDiscountComponent,
    SortComponent
  ],
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarMenuComponent {}
