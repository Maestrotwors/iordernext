import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '@frontend/ui';
import { ProductStore } from '@frontend/store/customer';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductImagesComponent {
  constructor(private productStore: ProductStore) {}

  product$ = this.productStore.product$;
}
