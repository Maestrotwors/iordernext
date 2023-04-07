import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-header-user-delivery-point',
  standalone: true,
  imports: [CommonModule, NzDropDownModule],
  templateUrl: './header-user-delivery-point.component.html',
  styleUrls: ['./header-user-delivery-point.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserDeliveryPointComponent {}
