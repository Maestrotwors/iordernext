import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerProductMapped } from '@frontend/projects/customer/models';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { fadeInAnimation } from '@frontend/core/ui/animations';
import { identify } from '@frontend/core/shared/helpers/array';

@Component({
  selector: 'app-products-block-view',
  standalone: true,
  imports: [CommonModule, ProductBlockComponent],
  templateUrl: './products-block-view.component.html',
  styleUrls: ['./products-block-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation],
})
export class ProductsBlockViewComponent {
  @Input() products: CustomerProductMapped[] = [];
  identify = identify;
}
