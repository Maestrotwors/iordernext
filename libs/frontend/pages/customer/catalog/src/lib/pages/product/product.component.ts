import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ActivatedRoute } from '@angular/router';
import { SpinnerCircleComponent } from '@frontend/ui';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductImagesComponent,
    ProductAdditionalInfoComponent,
    ProductContentComponent,
    SpinnerCircleComponent,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  private get productId() {
    return this.route.snapshot.params['id'];
  }
}

