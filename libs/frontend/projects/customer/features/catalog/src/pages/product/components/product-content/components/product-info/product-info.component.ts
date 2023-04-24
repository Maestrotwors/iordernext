import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProductStore } from '../../../../store/product.store';
import { BasketService } from '@frontend/projects/customer/shared/services/basket';
import { CurrentProductMapped } from '@frontend/projects/customer/models';
import { filter } from 'rxjs/internal/operators/filter';
import { ButtonModule } from 'primeng/button';

@UntilDestroy()
@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  product!: CurrentProductMapped;
  product$ = this.productStore.productMapped$;
  newQuantity = 0;

  constructor(
    private productStore: ProductStore,
    private basketService: BasketService
  ) {
    this.product$
      .pipe(
        untilDestroyed(this),
        filter((p) => p !== null)
      )
      .subscribe((product) => {
        this.product = product as CurrentProductMapped;
        this.newQuantity = this.product.inBasket;
        console.log(product);
      });
  }

  valueInBasketChanged(value: number) {}

  saveInBasket() {}
}
