import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-import-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './import-catalog.component.html',
  styleUrls: ['./import-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportCatalogComponent {

}
