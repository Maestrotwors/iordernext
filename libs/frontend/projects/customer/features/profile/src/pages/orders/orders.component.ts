import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileOrdersComponent {}
