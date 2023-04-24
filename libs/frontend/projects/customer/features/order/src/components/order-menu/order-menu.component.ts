import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderMenuComponent {

}
