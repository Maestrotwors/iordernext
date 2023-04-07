import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-info.component.html',
  styleUrls: ['./catalog-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogInfoComponent {

}
