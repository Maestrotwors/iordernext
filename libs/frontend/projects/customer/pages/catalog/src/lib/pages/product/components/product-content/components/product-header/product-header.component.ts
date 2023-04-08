import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CustomerCatalogNavigationService } from '@app/frontend/services';
import { ProductsInfoQuery } from '@app/frontend/models';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  constructor(
    private catalogNavigationService: CustomerCatalogNavigationService
  ) {}

  toCatalog() {
    this.catalogNavigationService.goToCatalog({page: 1, limit: 40});
  }
}
