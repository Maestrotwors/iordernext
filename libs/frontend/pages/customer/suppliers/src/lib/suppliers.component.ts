import { SpinnerCircleComponent } from '@frontend/ui';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ContractsComponent } from './components/contracts/contracts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsyncPipe, NgIf } from '@angular/common';

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

  ngOnInit() {
    //this.contractsService.getSuppliers();
  }
}
