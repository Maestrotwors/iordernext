import { Injectable } from '@angular/core';
import { SelectedContract } from '@frontend/projects/customer/models';

@Injectable({
  providedIn: 'root',
})
export class ContractRepositoryService {

  getContract(): SelectedContract | null {
    const contract: any = localStorage.getItem('selectedContract');
 
    if (typeof contract === 'string') {
      
      console.log(JSON.parse(contract));
      //let cont = new SelectedContract();
      const cont = JSON.parse(contract) as SelectedContract;
    } 
    return null;
  }

  setContract(contract: SelectedContract) {
    localStorage.setItem('selectedContract', JSON.stringify(contract));
  }

}
