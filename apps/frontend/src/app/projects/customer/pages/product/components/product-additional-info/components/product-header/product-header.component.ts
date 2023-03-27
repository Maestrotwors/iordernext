import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductHeaderComponent {

}
