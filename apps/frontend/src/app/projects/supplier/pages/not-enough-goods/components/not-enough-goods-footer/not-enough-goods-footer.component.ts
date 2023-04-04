import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-enough-goods-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-enough-goods-footer.component.html',
  styleUrls: ['./not-enough-goods-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotEnoughGoodsFooterComponent {

}
