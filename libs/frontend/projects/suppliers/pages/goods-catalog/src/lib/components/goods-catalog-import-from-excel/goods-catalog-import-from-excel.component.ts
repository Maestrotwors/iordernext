import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods-catalog-import-from-excel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goods-catalog-import-from-excel.component.html',
  styleUrls: ['./goods-catalog-import-from-excel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsCatalogImportFromExcelComponent {

}
