import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-catalog-pagination',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './catalog-pagination.component.html',
  styleUrls: ['./catalog-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogPaginationComponent {
  @Input() productsCount = 0;
  @Input() productsPerPage = 40;
  @Input() set selectedPageIndex(value: number) {
    this.currentPageIndex = value;
    console.log(value);
    this.cdr.detectChanges();
  }
  currentPageIndex = 1;

  @Output() pageIndexChanged = new EventEmitter<number>();

  constructor(private cdr: ChangeDetectorRef) {}

  changePageIndex(pageIndex: number) {
    this.pageIndexChanged.emit(pageIndex + 1);
  }
}
