import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { fadeInAnimation } from '@app/frontend/animations';
import { CustomerProductMapped } from '@app/frontend/models';

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

  identify(index: number, el: CustomerProductMapped): number {
    return el.id;
  }
}
