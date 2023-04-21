import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@frontend/ui';
import { ProductStore } from '@frontend/store/customer';
import { BasketService } from '@frontend/services/projects/customer/basket';
import { CustomerCurrentProductMapped } from '@frontend/models/customer';
import { filter } from 'rxjs/internal/operators/filter';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, NzTagModule, NzButtonModule, InputNumberComponent],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  product!: CustomerCurrentProductMapped;
  product$ = this.productStore.productMapped$;
  newQuantity = 0;

  constructor(
    private productStore: ProductStore,
    private basketService: BasketService
  ) {
    this.product$.pipe(untilDestroyed(this), filter((p) => p !== null)).subscribe((product) => {
      this.product = product as CustomerCurrentProductMapped;
      this.newQuantity = this.product.inBasket;
    });
  }

  valueInBasketChanged(value: number) {
    this.newQuantity = value;
  }

  saveInBasket() {
    this.basketService.saveInBasket(this.product.id, this.newQuantity);
  }
}
