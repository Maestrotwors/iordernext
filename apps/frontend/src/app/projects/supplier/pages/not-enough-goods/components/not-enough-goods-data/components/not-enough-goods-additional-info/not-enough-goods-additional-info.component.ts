import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-enough-goods-additional-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-enough-goods-additional-info.component.html',
  styleUrls: ['./not-enough-goods-additional-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotEnoughGoodsAdditionalInfoComponent {

}
