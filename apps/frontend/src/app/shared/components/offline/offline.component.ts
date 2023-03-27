import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfflineComponent {

}
