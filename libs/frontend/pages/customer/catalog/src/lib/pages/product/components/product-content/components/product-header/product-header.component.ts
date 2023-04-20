import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CatalogActionsService } from '@frontend/services/projects/customer/catalog';
@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  constructor(private catalogActionsService: CatalogActionsService) {}

  goBack() {
    if (window.history.state !== null && window.history.state.navigationId > 1) {
      history.back();
    } else {
      this.catalogActionsService.selectCatalogProductsPage();
    }
  }
}
