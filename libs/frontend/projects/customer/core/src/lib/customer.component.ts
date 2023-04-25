import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BasketService } from '@frontend/projects/customer/shared/services/basket';

@UntilDestroy()
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ BasketService ],
})
export class CustomerComponent implements OnInit {
  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.getContracts();
  }

  private getContracts() {
    this.basketService.getBasket().pipe(untilDestroyed(this)).subscribe();
  }
}
