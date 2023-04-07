import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { SpinnerCircleComponent } from '@app/frontend/ui';
import { fadeInAnimation } from '@app/frontend/animations';
import { CatalogProductsStore } from '@app/frontend/store';

@Component({
  selector: 'app-products-block-view',
  standalone: true,
  imports: [CommonModule, ProductBlockComponent, SpinnerCircleComponent],
  templateUrl: './products-block-view.component.html',
  styleUrls: ['./products-block-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation],
})
export class ProductsBlockViewComponent {
  constructor(private catalogProductsStore: CatalogProductsStore) {}

  products = this.catalogProductsStore.products$;
  productsCount = this.catalogProductsStore.productsCount$;
  loading = this.catalogProductsStore.loading$;

  identify(index: number, el: any): number {
    return el.id;
  }
}
