import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooperation-request-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooperation-request-filter.component.html',
  styleUrls: ['./cooperation-request-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationRequestFilterComponent {

}
