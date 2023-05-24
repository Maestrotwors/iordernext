import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrderMenuComponent } from './components/order-menu/order-menu.component';
import { OrderContentComponent } from './components/order-content/order-content.component';
import { OrderService } from './services/order.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { OrderStore } from './store/order.store';

@UntilDestroy()
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [OrderMenuComponent, OrderContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderService, OrderStore],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrder();
  }

  private getOrder() {
    this.orderService
      .getOrder({})
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe();
  }
}