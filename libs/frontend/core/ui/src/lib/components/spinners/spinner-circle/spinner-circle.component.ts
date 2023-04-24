import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner-circle.component.html',
  styleUrls: ['./spinner-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerCircleComponent {

}
