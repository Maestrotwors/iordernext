import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { SpinnerCircleComponent } from '@base/apps/frontend/src/app/shared/components/spinners/spinner-circle/spinner-circle.component';

@Component({
  selector: 'app-products-block-view',
  standalone: true,
  imports: [CommonModule, ProductBlockComponent, SpinnerCircleComponent],
  templateUrl: './products-block-view.component.html',
  styleUrls: ['./products-block-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsBlockViewComponent {
  constructor(protected storeService: StoreService) {}
  products: BehaviorSubject<any> = this.storeService.store.account.catalog.products;
}
