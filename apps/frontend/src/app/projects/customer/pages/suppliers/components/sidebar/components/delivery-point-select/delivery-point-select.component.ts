import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point-select.component.html',
  styleUrls: ['./delivery-point-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeliveryPointSelectComponent {

}
