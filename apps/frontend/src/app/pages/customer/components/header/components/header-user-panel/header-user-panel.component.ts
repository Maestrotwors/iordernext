import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { userMenuLinks } from '../../../../constants/user-menu-links';
import { RouterLinkWithHref } from '@angular/router';
@Component({
  selector: 'app-header-user-panel',
  standalone: true,
  imports: [CommonModule, NzDropDownModule, RouterLinkWithHref],
  templateUrl: './header-user-panel.component.html',
  styleUrls: ['./header-user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserPanelComponent {
  userMenuLinks = userMenuLinks;
}
