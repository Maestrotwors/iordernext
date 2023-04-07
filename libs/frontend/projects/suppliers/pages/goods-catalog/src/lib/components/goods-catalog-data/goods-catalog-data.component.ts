import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-catalog-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods-catalog-data.component.html',
  styleUrls: ['./goods-catalog-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCatalogDataComponent {

}
