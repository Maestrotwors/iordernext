import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-promo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-promo.component.html',
  styleUrls: ['./selected-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedPromoComponent {

}
