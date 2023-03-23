import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods-catalog.component.html',
  styleUrls: ['./goods-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCatalogComponent {

}
