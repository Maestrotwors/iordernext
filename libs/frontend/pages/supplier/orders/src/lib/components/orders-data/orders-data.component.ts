import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-data.component.html',
  styleUrls: ['./orders-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersDataComponent {

}
