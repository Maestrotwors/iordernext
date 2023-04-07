import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { SpinnerCircleComponent } from '@app/frontend/ui';
import { fadeInAnimation } from '@app/frontend/animations';
import { CatalogStore } from '../../../../store/catalog.store';

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
  constructor(
    private catalogStore: CatalogStore
  ) {}

  products = this.catalogStore.products$;
  productsCount = this.catalogStore.productsCount$
  loading = this.catalogStore.loading$;

  identify(index: number, el: any): number {
    return el.id;
  }
}
