import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-catalog-pagination',
  standalone: true,
  imports: [CommonModule, NzPaginationModule],
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPaginationComponent {
  @Input() productsCount = 0;
  @Input() productsPrePage = 40;
  @Input() selectedPageIndex = 1;
  @Input() show = true;
  @Output() pageIndexChanged = new EventEmitter<number>();

  changePageIndex(pageIndex: number) {
    this.pageIndexChanged.emit(pageIndex);
  }
}
