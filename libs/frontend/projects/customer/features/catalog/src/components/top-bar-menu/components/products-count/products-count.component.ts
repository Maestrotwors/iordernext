import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsStore } from '../../../../pages/catalog-content/store/products.store';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';

@Component({
  selector: 'app-products-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-count.component.html',
  styleUrls: ['./products-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsCountComponent {
  constructor(private productsStore: ProductsStore) {}

  totalCountProducts = this.productsStore.totalCountProducts$.pipe(distinctUntilChanged());
}
