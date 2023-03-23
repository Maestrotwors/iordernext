import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent {

}
