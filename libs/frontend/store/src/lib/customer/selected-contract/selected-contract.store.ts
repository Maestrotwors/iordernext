import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Injectable } from '@angular/core';
import { SelectedContract } from '@frontend/models/customer';

@Injectable({
  providedIn: 'root',
})
export class SelectedContractStore {
  private _selectedContract$: BehaviorSubject<SelectedContract> =
    new BehaviorSubject<SelectedContract>({
      supplier: {
        id: 1,
        name: 'Test',
        image:
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      },
      deliveryPoint: {
        id: 1,
        name: 'city 1',
      },
      legalEntity: {
        id: 1,
        name: 'новий кпк',
      }
    });

  public selectedContractChanged$ = this._selectedContract$.asObservable();

  updateSelectedContract(contract: SelectedContract) {
    this._selectedContract$.next(contract);
  }

  getSelectedContract() {
    return this._selectedContract$.getValue();
  }
}
