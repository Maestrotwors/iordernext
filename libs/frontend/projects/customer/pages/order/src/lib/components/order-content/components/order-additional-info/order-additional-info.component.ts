import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-additional-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-additional-info.component.html',
  styleUrls: ['./order-additional-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderAdditionalInfoComponent {}
