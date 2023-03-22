import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsBlockViewComponent } from './views/products-block-view/products-block-view.component';
import { ProductsListViewComponent } from './views/products-list-view/products-list-view.component';

@Component({
  selector: 'app-catalog-content',
  standalone: true,
  imports: [CommonModule, ProductsListViewComponent, ProductsBlockViewComponent],
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogContentComponent {

}
