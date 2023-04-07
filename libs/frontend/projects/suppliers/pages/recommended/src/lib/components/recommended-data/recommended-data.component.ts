import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-data.component.html',
  styleUrls: ['./recommended-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendedDataComponent {

}
