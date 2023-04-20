import { ImageLoaderComponent, InputNumberComponent } from '@frontend/ui';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CustomerProduct } from '@frontend/models/customer';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { CustomerContractService } from '@frontend/services/projects/customer/core';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [
    CommonModule,
    ImageLoaderComponent,
    NzButtonModule,
    InputNumberComponent,
    RouterLinkWithHref,
    RouterLink,
  ],
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBlockComponent {
  @Input() product: CustomerProduct | null = null;

  constructor(private customerContractService: CustomerContractService) {}

  newQuantity: number | null = null;
  contractQueryParams = this.customerContractService.getContractQueryParams();

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
