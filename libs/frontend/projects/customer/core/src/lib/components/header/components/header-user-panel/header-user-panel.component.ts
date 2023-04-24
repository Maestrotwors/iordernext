import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { userMenuLinks } from '@frontend/projects/customer/shared/constants';

@Component({
  selector: 'app-header-user-panel',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './header-user-panel.component.html',
  styleUrls: ['./header-user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUserPanelComponent {
  userMenuLinks = userMenuLinks;
}
