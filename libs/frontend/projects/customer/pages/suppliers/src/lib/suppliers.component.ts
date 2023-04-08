import { SpinnerCircleComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ContractsComponent } from './components/contracts/contracts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { ContractsStore } from '@app/frontend/store';
import { CustomerContractsService } from '@app/frontend/services';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  standalone: true,
  imports: [
    ContractsComponent,
    SidebarComponent,
    SpinnerCircleComponent,
    NgIf,
    AsyncPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuppliersComponent implements OnInit {
  constructor(
    private contractsService: CustomerContractsService,
    private contractsStore: ContractsStore
  ) {}

  public loading = this.contractsStore.loading$;

  ngOnInit() {
    this.contractsService.getSuppliers();
  }
}
