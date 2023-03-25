import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SuppliersService } from '../../services/suppliers/suppliers.service';
import { ContractsComponent } from './components/contracts/contracts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  standalone: true,
  imports:[ContractsComponent, SidebarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuppliersComponent implements OnInit {
  constructor(private suppliersService: SuppliersService) {}

  ngOnInit() {
    this.suppliersService.getSuppliers();
  }
}
