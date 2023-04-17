import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooperation-request-additional-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooperation-request-additional-info.component.html',
  styleUrls: ['./cooperation-request-additional-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationRequestAdditionalInfoComponent {

}
