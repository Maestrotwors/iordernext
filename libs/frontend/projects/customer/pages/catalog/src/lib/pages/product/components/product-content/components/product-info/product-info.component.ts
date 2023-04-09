import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputNumberComponent } from '@app/frontend/ui';
import { CustomerCatalogProductStore } from '@app/frontend/store';
import { CustomerProductService } from '@app/frontend/services';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, NzTagModule, NzButtonModule, InputNumberComponent],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  newQuantity: number | null = null;
  constructor(
    private catalogProductStore: CustomerCatalogProductStore,
    private productService: CustomerProductService
  ) {}

  public product = this.catalogProductStore.productMapped$;

  valueInBasketChanged(value: number) {
    this.newQuantity = value;
  }

  saveInBasket() {
    if (this.newQuantity === null) {
      return;
    }
    this.productService.saveInBasket(
      this.catalogProductStore.getProduct().id,
      this.newQuantity
    );
    this.newQuantity = null;
  }
}
