import { fadeInAnimation } from '@frontend/animations';
import { SupplierEmblemBigComponent } from '@frontend/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsStore } from '@frontend/store/customer';

@Component({
  selector: 'app-contracts-suppliers',
  standalone: true,
  imports: [CommonModule, SupplierEmblemBigComponent],
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation],
})
export class ContractsComponent {
  contracts$ = this.contractsStore.contracts$;
  constructor(private contractsStore: ContractsStore) {}
}
