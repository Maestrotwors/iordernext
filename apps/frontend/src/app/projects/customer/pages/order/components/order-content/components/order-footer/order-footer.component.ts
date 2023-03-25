import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-order-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFooterComponent {}
