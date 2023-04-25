import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ContractsComponent } from './components/contracts/contracts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { ContractsService } from './services/contracts.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  standalone: true,
  imports: [ContractsComponent, SidebarComponent, NgIf, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ContractsService]
})
export class SuppliersComponent implements OnInit {
  constructor(private contractsService: ContractsService) {}

  ngOnInit() {
    this.getContracts();
  }

  private getContracts() {
    this.contractsService.getContracts().pipe(untilDestroyed(this)).subscribe();
  }
}
