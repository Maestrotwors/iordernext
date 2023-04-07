import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cooperation-request-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooperation-request-data.component.html',
  styleUrls: ['./cooperation-request-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationRequestDataComponent {

}
