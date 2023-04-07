import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activated-promo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activated-promo.component.html',
  styleUrls: ['./activated-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivatedPromoComponent {

}
