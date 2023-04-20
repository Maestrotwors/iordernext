import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CustomerInitializeService } from '@frontend/services/projects/customer/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [],
})
export class CustomerComponent {
  constructor(private customerInitializeService: CustomerInitializeService) {
    this.customerInitializeService.initialize();
  }
}
