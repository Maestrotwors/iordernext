import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@Component({
  selector: 'app-product-additional-info',
  standalone: true,
  imports: [CommonModule, NzTabsModule],
  templateUrl: './product-additional-info.component.html',
  styleUrls: ['./product-additional-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAdditionalInfoComponent {}
