import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { OrderOptionsComponent } from './components/order-options/order-options.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';

@Component({
  selector: 'app-order-final-page',
  standalone: true,
  imports: [
    CommonModule,
    OrderTableComponent,
    OrderOptionsComponent,
    OrderInfoComponent,
  ],
  templateUrl: './order-final-page.component.html',
  styleUrls: ['./order-final-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFinalPageComponent {}
