import { ImageLoaderComponent } from './../../../../../../../../../../shared/components/image-loader/image-loader.component';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@base/apps/frontend/src/app/projects/customer/services/product/product.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@base/apps/frontend/src/app/shared/components/input-number/input-number.component';

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
