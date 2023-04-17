import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-count.component.html',
  styleUrls: ['./products-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCountComponent {

}
