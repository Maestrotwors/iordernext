import { OfflineService } from './../../services/core/offline/offline.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerStoreService } from './services/core/customer-store/customer-store.service';
import { onlineStatus } from '@app-services/offline/online-status.type';
import { CustomerService } from './services/core/customer/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [CustomerStoreService],
})
export class CustomerComponent implements OnInit {
  constructor(
    private customerStoreService: CustomerStoreService,
    protected offlineService: OfflineService,
    private customerService: CustomerService
  ) {}

  onlineStatus = onlineStatus;

  ngOnInit(): void {
    this.customerService.initCustomer();
  }
}
