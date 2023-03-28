import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBlockComponent } from './components/product-block/product-block.component';
import { Observable } from 'rxjs/internal/Observable';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-products-block-view',
  standalone: true,
  imports: [CommonModule, ProductBlockComponent],
  templateUrl: './products-block-view.component.html',
  styleUrls: ['./products-block-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsBlockViewComponent {
  constructor(protected storeService: StoreService) {}
  products: BehaviorSubject<any> = this.storeService.store.account.catalog.products;
}
