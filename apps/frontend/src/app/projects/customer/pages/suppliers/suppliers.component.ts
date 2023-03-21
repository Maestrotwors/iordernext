import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SuppliersService } from '../../services/suppliers/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuppliersComponent implements OnInit {
  constructor(private suppliersService: SuppliersService) {}

  ngOnInit() {
    this.suppliersService.getSuppliers();
  }
}
