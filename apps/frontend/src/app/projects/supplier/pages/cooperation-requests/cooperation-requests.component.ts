import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooperation-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooperation-requests.component.html',
  styleUrls: ['./cooperation-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationRequestsComponent {

}
