import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageLoaderComponent } from '@frontend/ui';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductImagesComponent {}
