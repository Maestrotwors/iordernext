import { ImageLoaderComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@app/frontend/projects/customer/services/product';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@app/frontend/ui';

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
  @Input() product: any;

  constructor(private productService: ProductService) {}

  selectProduct(id: number) {
    this.productService.selectProduct(id);
  }
}
