import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MENU_LIST } from '../../../constants/menu-list';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDesktopComponent {
  MENU_LIST = MENU_LIST;
}
