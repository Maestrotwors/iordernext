import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-virtual-discount',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './virtual-discount.component.html',
  styleUrls: ['./virtual-discount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualDiscountComponent {

}
