import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-enough-goods-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-enough-goods-data.component.html',
  styleUrls: ['./not-enough-goods-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotEnoughGoodsDataComponent {

}
