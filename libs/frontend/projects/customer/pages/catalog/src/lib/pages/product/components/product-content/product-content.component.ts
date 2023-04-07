import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductParametersComponent } from './components/product-parameters/product-parameters.component';

@Component({
  selector: 'app-product-content',
  standalone: true,
  imports: [
    CommonModule,
    ProductHeaderComponent,
    ProductInfoComponent,
    ProductParametersComponent
  ],
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContentComponent implements OnInit {
  ngOnInit(): void {
    window.scroll({ top: 0 });
  }
}
