import { SpinnerCircleComponent } from './../../../../shared/components/spinners/spinner-circle/spinner-circle.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarMenuComponent } from '../../components/side-bar-menu/side-bar-menu.component';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    SideBarMenuComponent,
    ProductImagesComponent,
    ProductAdditionalInfoComponent,
    ProductContentComponent,
    SpinnerCircleComponent
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private storeService: StoreService
  ) {}

  public product: BehaviorSubject<any> =
    this.storeService.store.account.product;

  ngOnInit(): void {
    this.productService.getProduct(this.productId);
  }

  private get productId() {
    return this.route.snapshot.params['id'];
  }
}

