import { SpinnerCircleComponent } from '../../../../shared/components/loaders/spinner-circle/spinner-circle.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  standalone: true,
  imports: [ContractsComponent, SidebarComponent, SpinnerCircleComponent, NgIf, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuppliersComponent implements OnInit {
  constructor(
    private suppliersService: SuppliersService,
    protected storeService: StoreService
  ) {}

  public suppliers: BehaviorSubject<any> = this.storeService.store.account.suppliers;

  ngOnInit() {
    this.suppliersService.getSuppliers();
  }
}
