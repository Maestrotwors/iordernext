import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss', '../order-final-shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTableComponent {}
