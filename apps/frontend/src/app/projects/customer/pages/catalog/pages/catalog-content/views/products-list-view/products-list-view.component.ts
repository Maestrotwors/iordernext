import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list-view.component.html',
  styleUrls: ['./products-list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListViewComponent {

}
