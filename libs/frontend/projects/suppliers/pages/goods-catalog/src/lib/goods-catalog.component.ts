import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsCatalogDataComponent } from './components/goods-catalog-data/goods-catalog-data.component';
import { GoodsCatalogFilterComponent } from './components/goods-catalog-filter/goods-catalog-filter.component';

@Component({
  selector: 'app-goods-catalog',
  standalone: true,
  imports: [CommonModule, GoodsCatalogDataComponent, GoodsCatalogFilterComponent],
  templateUrl: './goods-catalog.component.html',
  styleUrls: ['./goods-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCatalogComponent {

}
