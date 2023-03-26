import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-user-basket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-user-basket.component.html',
  styleUrls: ['./header-user-basket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUserBasketComponent {

}
