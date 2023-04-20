import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@frontend/ui';
import { ProductStore } from '@frontend/store/customer';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, NzTagModule, NzButtonModule, InputNumberComponent],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  constructor(private productStore: ProductStore) {}

  product$ = this.productStore.product$;
  newQuantity: number | null = null;

  valueInBasketChanged(value: number) {
    this.newQuantity = value;
  }

  saveInBasket() {}
}
