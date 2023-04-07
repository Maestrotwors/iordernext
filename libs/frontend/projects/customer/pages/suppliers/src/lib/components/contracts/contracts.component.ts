import { fadeInAnimation } from '@app/frontend/animations';
import { SupplierEmblemBigComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsStore } from '@app/frontend/store';

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
  constructor(private contractsStore: ContractsStore) {}

  public suppliers = this.contractsStore.contracts$;

  identify(index: number, el: any): number {
    return el.id;
  }
}
