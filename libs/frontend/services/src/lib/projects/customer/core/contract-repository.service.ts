import { Injectable } from '@angular/core';
import { SelectedContract } from '@frontend/models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerContractRepositoryService {

  getContract(): SelectedContract | null {
    /*const contract: any = localStorage.getItem('selectedContract');
    console.log(contract);
    if (typeof contract === 'string') {
      console.log(JSON.parse(contract));
      //let cont = new SelectedContract();
      let cont = JSON.parse(contract) as SelectedContract;
      console.log(cont instanceof SelectedContract);
    } */
    return null;
  }

  setContract(contract: SelectedContract) {
    localStorage.setItem('selectedContract', JSON.stringify(contract));
  }
}
