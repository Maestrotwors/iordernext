import { Injectable } from '@angular/core';
import { SelectedContract } from '@frontend/projects/customer/models';
import { SelectedContractStore } from '../../store/selected-contract';

@Injectable()
export class ContractService {
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
