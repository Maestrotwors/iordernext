import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarMenuComponent {

}
