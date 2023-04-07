import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefundComponent {

}
