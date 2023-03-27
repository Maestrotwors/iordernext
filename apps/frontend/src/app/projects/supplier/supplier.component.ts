import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SupplierStoreService } from './services/core/supplier-store/supplier-store.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [SupplierStoreService],
})
export class SupplierComponent {
  constructor(private supplierStoreService: SupplierStoreService) {}
}
