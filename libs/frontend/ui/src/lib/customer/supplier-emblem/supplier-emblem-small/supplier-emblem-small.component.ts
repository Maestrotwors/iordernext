import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-emblem-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './supplier-emblem-small.component.html',
  styleUrls: ['./supplier-emblem-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupplierEmblemSmallComponent {

}
