import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CatalogService } from '@app/frontend/projects/customer/services/catalog';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHeaderComponent {
  constructor(private catalogService: CatalogService) {}

  toCatalog() {
    this.catalogService.toCatalog();
  }
}
