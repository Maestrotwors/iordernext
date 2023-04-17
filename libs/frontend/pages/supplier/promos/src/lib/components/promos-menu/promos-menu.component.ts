import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promos-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promos-menu.component.html',
  styleUrls: ['./promos-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromosMenuComponent {

}
