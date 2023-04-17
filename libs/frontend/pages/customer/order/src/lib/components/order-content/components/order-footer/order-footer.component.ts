import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-order-footer',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './order-footer.component.html',
  styleUrls: ['./order-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFooterComponent {}
