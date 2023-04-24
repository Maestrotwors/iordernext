import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './services/product.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ProductImagesComponent } from './components/product-images/product-images.component';

@UntilDestroy()
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductAdditionalInfoComponent,
    ProductContentComponent,
    ProductImagesComponent,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProduct();
    this.subscribeToProductAndBasketChanged();
  }

  private getProduct() {
    this.productService
      .getProduct({ id: this.productId, ...this.queryParams })
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  private subscribeToProductAndBasketChanged() {
    this.productService.productAndBasketChanged()
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  private get productId() {
    return this.route.snapshot.params['id'];
  }

  private get queryParams() {
    return this.route.snapshot.queryParams;
  }
}

