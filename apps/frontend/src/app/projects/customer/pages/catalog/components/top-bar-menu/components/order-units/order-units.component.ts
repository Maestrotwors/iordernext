import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-units',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-units.component.html',
  styleUrls: ['./order-units.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderUnitsComponent {

}
