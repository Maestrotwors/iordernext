import { OfflineService } from './../../services/core/offline/offline.service';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CustomerStoreService } from './services/core/customer-store/customer-store.service';
import { onlineStatus } from '@app-services/offline/online-status.type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [CustomerStoreService],
})
export class CustomerComponent {
  constructor(
    private customerStoreService: CustomerStoreService,
    protected offlineService: OfflineService
  ) {}

  onlineStatus = onlineStatus;
}
