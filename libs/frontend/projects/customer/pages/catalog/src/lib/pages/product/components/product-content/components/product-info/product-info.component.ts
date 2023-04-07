import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { InputNumberComponent } from '@app/frontend/ui';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, NzTagModule, NzButtonModule, InputNumberComponent],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  constructor() {}

  public product: BehaviorSubject<any> = new BehaviorSubject({}) //this.storeService.store.account.product;
}
