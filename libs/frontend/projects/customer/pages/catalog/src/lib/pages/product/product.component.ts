import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ActivatedRoute } from '@angular/router';
import { SpinnerCircleComponent } from '@app/frontend/ui';
import { CustomerProductService } from '@app/frontend/services';
import { CustomerCatalogProductStore } from '@app/frontend/store';

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
    private productService: CustomerProductService,
    private catalogProductStore: CustomerCatalogProductStore
  ) {}

  public loading = this.catalogProductStore.loading$;

  ngOnInit(): void {
    this.productService.getProduct(this.productId);
  }

  private get productId() {
    return this.route.snapshot.params['id'];
  }
}

