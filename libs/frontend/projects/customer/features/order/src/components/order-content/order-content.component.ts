import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { OrderFooterComponent } from './components/order-footer/order-footer.component';
import { OrderAdditionalInfoComponent } from './components/order-additional-info/order-additional-info.component';

@Component({
  selector: 'app-order-content',
  standalone: true,
  imports: [
    CommonModule,
    OrderTableComponent,
    OrderHeaderComponent,
    OrderFooterComponent,
    OrderAdditionalInfoComponent
  ],
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderContentComponent {}
