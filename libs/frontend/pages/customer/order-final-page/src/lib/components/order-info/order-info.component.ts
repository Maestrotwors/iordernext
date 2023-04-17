import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-order-info',
  standalone: true,
  imports: [CommonModule, NzButtonModule],
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss', '../order-final-shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderInfoComponent {}
