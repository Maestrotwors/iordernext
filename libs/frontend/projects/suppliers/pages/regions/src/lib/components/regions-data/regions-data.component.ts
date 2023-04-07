import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regions-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regions-data.component.html',
  styleUrls: ['./regions-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsDataComponent {

}
