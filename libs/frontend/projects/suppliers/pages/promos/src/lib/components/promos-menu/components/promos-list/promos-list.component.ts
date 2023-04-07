import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promos-list.component.html',
  styleUrls: ['./promos-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromosListComponent {

}
