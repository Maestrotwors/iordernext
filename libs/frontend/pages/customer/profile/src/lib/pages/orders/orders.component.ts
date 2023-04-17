import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-profile-orders',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileOrdersComponent {}
