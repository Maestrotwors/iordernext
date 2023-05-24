import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-supplier-filter',
  standalone: true,
  imports: [CommonModule, DropdownModule, FormsModule],
  templateUrl: './sub-supplier-filter.component.html',
  styleUrls: ['./sub-supplier-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSupplierFilterComponent {
  constructor() {}

  //public subSuppliers = this.catalogSubSuppliersStore.subSuppliers$;

  selectedSubSupplier = { id: 1, name: 'SubSupplier 1' };
  subSuppliers = [{ id: 1, name: 'SubSupplier 1' }];
}
