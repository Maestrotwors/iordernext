import { ImageLoaderComponent, InputNumberComponent } from '@frontend/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [
    CommonModule,
    ImageLoaderComponent,
    NzButtonModule,
    InputNumberComponent,
  ],
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBlockComponent {

  newQuantity: number | null = null;
  product = {};
  valueInBasketChanged(value: number) {
    this.newQuantity = value;
  }

  selectProduct(id: number) {
    //this.productService.selectProduct(id);
  }

  saveInBasket() {
    if (this.newQuantity === null) {
      return;
    }
    //this.productService.saveInBasket(this.product.id, this.newQuantity);
    this.newQuantity = null;
  }
}
