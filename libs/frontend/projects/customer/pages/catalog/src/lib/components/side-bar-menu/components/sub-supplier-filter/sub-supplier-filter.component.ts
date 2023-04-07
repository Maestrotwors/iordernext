import { SelectComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogSubSuppliersStore } from '@app/frontend/store';

@Component({
  selector: 'app-sub-supplier-filter',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './sub-supplier-filter.component.html',
  styleUrls: ['./sub-supplier-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSupplierFilterComponent {
  constructor(private catalogSubSuppliersStore: CatalogSubSuppliersStore) {}

  public subSuppliers = this.catalogSubSuppliersStore.subSuppliers$;
}
