import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendedComponent {

}
