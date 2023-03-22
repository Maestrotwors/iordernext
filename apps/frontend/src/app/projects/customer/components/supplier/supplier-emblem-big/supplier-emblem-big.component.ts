import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-emblem-big',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-emblem-big.component.html',
  styleUrls: ['./supplier-emblem-big.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupplierEmblemBigComponent {

}
