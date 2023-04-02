import { StoreService } from '@app-services/store/store/store.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { InputNumberComponent } from '@base/apps/frontend/src/app/shared/components/input-number/input-number.component';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, NzTagModule, NzButtonModule, InputNumberComponent],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  constructor(private storeService: StoreService) {}

  public product: BehaviorSubject<any> =
    this.storeService.store.account.product;
}
