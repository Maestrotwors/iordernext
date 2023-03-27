import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CustomerStoreService } from './services/core/customer-store/customer-store.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [CustomerStoreService],
})
export class CustomerComponent {
  constructor(private customerStoreService: CustomerStoreService) {}
}
