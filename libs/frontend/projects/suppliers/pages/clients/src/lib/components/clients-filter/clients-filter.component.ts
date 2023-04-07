import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients-filter.component.html',
  styleUrls: ['./clients-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsFilterComponent {

}
