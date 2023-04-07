import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderHeaderComponent {

}
