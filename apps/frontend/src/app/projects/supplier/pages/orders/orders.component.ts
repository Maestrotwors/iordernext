import { OrdersFilterComponent } from './components/orders-filter/orders-filter.component';
import { OrdersDataComponent } from './components/orders-data/orders-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, OrdersDataComponent, OrdersFilterComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {

}
