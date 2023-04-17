import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regions-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regions-menu.component.html',
  styleUrls: ['./regions-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsMenuComponent {

}
