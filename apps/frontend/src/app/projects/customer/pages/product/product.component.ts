import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarMenuComponent } from '../../components/side-bar-menu/side-bar-menu.component';
import { ProductAdditionalInfoComponent } from './components/product-additional-info/product-additional-info.component';
import { ProductContentComponent } from './components/product-content/product-content.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SideBarMenuComponent, ProductImagesComponent, ProductAdditionalInfoComponent, ProductContentComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {}
