import { CooperationRequestFilterComponent } from './components/cooperation-request-filter/cooperation-request-filter.component';
import { CooperationRequestDataComponent } from './components/cooperation-request-data/cooperation-request-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooperation-requests',
  standalone: true,
  imports: [CommonModule, CooperationRequestDataComponent, CooperationRequestFilterComponent],
  templateUrl: './cooperation-requests.component.html',
  styleUrls: ['./cooperation-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationRequestsComponent {

}
