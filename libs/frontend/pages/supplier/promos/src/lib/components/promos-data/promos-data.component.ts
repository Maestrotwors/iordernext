import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promos-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promos-data.component.html',
  styleUrls: ['./promos-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromosDataComponent {

}
