import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss', '../order-final-shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderInfoComponent {}
