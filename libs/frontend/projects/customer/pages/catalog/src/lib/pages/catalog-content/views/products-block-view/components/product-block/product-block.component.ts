import { ImageLoaderComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProductService } from '@app/frontend/services';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@app/frontend/ui';
import { CustomerProductMapped } from '@app/frontend/models';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [
    CommonModule,
    ImageLoaderComponent,
    NzButtonModule,
    InputNumberComponent,
  ],
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBlockComponent {
  @Input() product!: CustomerProductMapped;

  constructor(private productService: CustomerProductService) {}

  selectProduct(id: number) {
    this.productService.selectProduct(id);
  }
}
