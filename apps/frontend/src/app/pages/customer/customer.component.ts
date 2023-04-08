import { OfflineService } from '../../services/core/offline/offline.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomerService } from '@app/frontend/services';
import { onlineStatus } from '../../services/core/offline/online-status.type';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [],
})
export class CustomerComponent implements OnInit {
  constructor(
    protected offlineService: OfflineService,
    private customerService: CustomerService
  ) {}

  onlineStatus = onlineStatus;

  ngOnInit(): void {
    this.customerService.initCustomer();
  }
}
