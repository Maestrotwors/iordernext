import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-options.component.html',
  styleUrls: ['./order-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderOptionsComponent {

}
