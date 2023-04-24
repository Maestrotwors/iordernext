import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-user-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-user-delivery-point.component.html',
  styleUrls: ['./header-user-delivery-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserDeliveryPointComponent {}
