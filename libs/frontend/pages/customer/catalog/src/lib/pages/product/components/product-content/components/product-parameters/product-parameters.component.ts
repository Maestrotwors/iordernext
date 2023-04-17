import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-parameters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-parameters.component.html',
  styleUrls: ['./product-parameters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductParametersComponent {

}
