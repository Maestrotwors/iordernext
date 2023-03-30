import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { OfflineService } from '@app-services/offline/offline.service';
import { onlineStatus } from '@app-services/offline/online-status.type';
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
  constructor(private supplierStoreService: SupplierStoreService, protected offlineService: OfflineService
  ) {}

  onlineStatus = onlineStatus;
}
