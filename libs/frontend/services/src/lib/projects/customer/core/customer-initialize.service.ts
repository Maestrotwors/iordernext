import { Injectable } from '@angular/core';
import { SelectedContract } from '@frontend/models/customer';
import { BasketService } from '../basket';
import { CustomerContractRepositoryService } from './contract-repository.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerInitializeService {
  constructor(
    private basketService: BasketService,
    private customerContractRepositoryService: CustomerContractRepositoryService
  ) {}

  initialize() {
    const contract: SelectedContract | null = this.customerContractRepositoryService.getContract();
    console.log(contract);
    this.basketService.getBasket();
  }
}
