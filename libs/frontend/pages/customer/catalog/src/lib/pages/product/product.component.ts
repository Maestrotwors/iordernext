import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ActivatedRoute } from '@angular/router';
import { SpinnerCircleComponent } from '@frontend/ui';
import { ProductRouteService } from '@frontend/services/projects/customer/catalog-product';
import { ProductStore } from '@frontend/store/customer';
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
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productRouteService: ProductRouteService
  ) {}

  ngOnInit() {
    this.productRouteService.productParamsChanged({
      id: this.productId,
      ...this.queryParams,
    });
  }

  private get productId() {
    return this.route.snapshot.params['id'];
  }

  private get queryParams() {
    return this.route.snapshot.queryParams;
  }
}

