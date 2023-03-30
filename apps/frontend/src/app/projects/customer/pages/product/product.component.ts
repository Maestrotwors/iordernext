import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarMenuComponent } from '../../components/side-bar-menu/side-bar-menu.component';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    SideBarMenuComponent,
    ProductImagesComponent,
    ProductAdditionalInfoComponent,
    ProductContentComponent,
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

  ngOnInit(): void {
    this.productService.getProduct(this.productId);
  }

  private get productId() {
    return this.route.snapshot.params['id'];
  }
}
