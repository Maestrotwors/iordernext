import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-activated-promo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-activated-promo.component.html',
  styleUrls: ['./not-activated-promo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotActivatedPromoComponent {

}
