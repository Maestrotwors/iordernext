import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractEmblemBigComponent } from '@frontend/projects/customer/ui/contract-emblem/contract-emblem-big';
import { ContractsStore } from '../../store/contracts.store';
import { identify } from '@frontend/core/shared/helpers/array';
import { fadeInAnimation } from '@frontend/core/ui/animations';

@Component({
  selector: 'app-contracts-suppliers',
  standalone: true,
  imports: [CommonModule, ContractEmblemBigComponent],
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation],
})
export class ContractsComponent {
  constructor(private contractsStore: ContractsStore) {}

  contracts$ = this.contractsStore.contracts$;
  identify = identify;
}
