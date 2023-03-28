import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBlockComponent {
  @Input() product: any
}
