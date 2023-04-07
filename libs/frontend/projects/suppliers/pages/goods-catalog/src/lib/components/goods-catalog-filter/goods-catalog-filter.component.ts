import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-catalog-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods-catalog-filter.component.html',
  styleUrls: ['./goods-catalog-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCatalogFilterComponent {

}
