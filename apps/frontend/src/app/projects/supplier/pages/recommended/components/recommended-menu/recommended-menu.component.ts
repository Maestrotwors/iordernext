import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-menu.component.html',
  styleUrls: ['./recommended-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendedMenuComponent {

}
