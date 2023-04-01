import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ImageLoaderComponent } from '@base/apps/frontend/src/app/shared/components/image-loader/image-loader.component';

@Component({
  selector: 'app-product-images',
  standalone: true,
  imports: [CommonModule, ImageLoaderComponent],
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductImagesComponent {
  constructor(private storeService: StoreService) {}

  public product: BehaviorSubject<any> =
    this.storeService.store.account.product;
}
