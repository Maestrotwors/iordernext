import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrderMenuComponent } from './components/order-menu/order-menu.component';
import { OrderContentComponent } from './components/order-content/order-content.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  standalone: true,
  imports: [
    OrderMenuComponent,
    OrderContentComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
