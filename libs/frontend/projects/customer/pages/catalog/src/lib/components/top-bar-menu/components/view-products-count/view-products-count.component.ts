import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-products-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-products-count.component.html',
  styleUrls: ['./view-products-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewProductsCountComponent {

}
