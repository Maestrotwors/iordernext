import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-enough-goods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-enough-goods.component.html',
  styleUrls: ['./not-enough-goods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotEnoughGoodsComponent {

}
