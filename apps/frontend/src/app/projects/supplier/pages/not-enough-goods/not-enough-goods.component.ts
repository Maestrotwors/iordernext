import { NotEnoughGoodsFooterComponent } from './components/not-enough-goods-footer/not-enough-goods-footer.component';
import { NotEnoughGoodsDataComponent } from './components/not-enough-goods-data/not-enough-goods-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-enough-goods',
  standalone: true,
  imports: [CommonModule, NotEnoughGoodsDataComponent, NotEnoughGoodsFooterComponent],
  templateUrl: './not-enough-goods.component.html',
  styleUrls: ['./not-enough-goods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotEnoughGoodsComponent {

}
