import { Injectable } from '@angular/core';
import { SelectedContract } from '@frontend/models/customer';
import { SelectedContractStore } from '@frontend/store/customer/selected-contract';

@Injectable({
  providedIn: 'root',
})
export class CustomerContractService {
  constructor(private selectedContractStore: SelectedContractStore) {}

  getSelectedContract(): SelectedContract {
    return this.selectedContractStore.getSelectedContract();
  }

  setSelectedContract(contract: SelectedContract) {
    this.selectedContractStore.updateSelectedContract(contract);
  }

  getContractQueryParams() {
    const contract: SelectedContract = this.getSelectedContract();
    return {
      sId: contract.supplier.id,
      dp: contract.deliveryPoint.id,
      le: contract.legalEntity.id
    };
  }
}
