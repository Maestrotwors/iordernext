import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-user-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-user-panel.component.html',
  styleUrls: ['./header-user-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUserPanelComponent {

}
