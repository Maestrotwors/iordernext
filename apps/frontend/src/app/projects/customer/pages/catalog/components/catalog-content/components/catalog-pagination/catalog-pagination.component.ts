import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPaginationComponent {

}
