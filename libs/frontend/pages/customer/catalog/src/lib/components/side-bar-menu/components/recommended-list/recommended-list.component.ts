import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendedListComponent {

}
