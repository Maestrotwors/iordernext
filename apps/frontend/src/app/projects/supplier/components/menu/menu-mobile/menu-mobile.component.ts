import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuMobileComponent {

}
