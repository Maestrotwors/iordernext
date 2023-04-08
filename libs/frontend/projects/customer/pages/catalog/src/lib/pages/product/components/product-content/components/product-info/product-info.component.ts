import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@app/frontend/ui';
import { CustomerCatalogProductStore } from '@app/frontend/store';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, NzTagModule, NzButtonModule, InputNumberComponent],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  constructor(private catalogProductStore: CustomerCatalogProductStore) {}

  public product = this.catalogProductStore.product$;
}
