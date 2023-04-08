import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '@app/frontend/ui';
import { CustomerCatalogProductStore } from '@app/frontend/store';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductImagesComponent {
  constructor(private catalogProductStore: CustomerCatalogProductStore) {}

  public product = this.catalogProductStore.product$;
}
