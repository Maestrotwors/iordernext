import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { CustomerProductMapped } from '@frontend/projects/customer/models';
import { BasketService } from '@frontend/projects/customer/shared/services/basket';
import { ContractService } from '@frontend/projects/customer/shared/services/contract';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputNumberModule, RouterLinkWithHref, FormsModule],
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBlockComponent {
  @Input() product!: CustomerProductMapped;

  constructor(private basketService: BasketService, private contractService: ContractService) {}

  newQuantity: number | null = null;
  contractQueryParams = this.contractService.getContractQueryParams();

  valueInBasketChanged(value: number) {
    this.newQuantity = value;
  }

  saveInBasket() {
    if (this.newQuantity === null) {
      return;
    }
    this.basketService.saveInBasket(this.product.id, this.newQuantity);
    this.newQuantity = null;
  }
}
