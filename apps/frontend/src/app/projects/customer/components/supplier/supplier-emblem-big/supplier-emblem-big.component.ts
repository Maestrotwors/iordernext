import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '@base/apps/frontend/src/app/shared/components/image-loader/image-loader.component';

@Component({
  selector: 'app-supplier-emblem-big',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './supplier-emblem-big.component.html',
  styleUrls: ['./supplier-emblem-big.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupplierEmblemBigComponent {
  @Input() src = '';
}
