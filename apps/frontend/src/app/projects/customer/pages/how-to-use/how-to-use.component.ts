import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-use',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowToUseComponent {

}
