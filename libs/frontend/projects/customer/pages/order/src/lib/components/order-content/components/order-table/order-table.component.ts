import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CustomerBasketProduct } from '@app/frontend/models';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [CommonModule, NzTableModule],
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTableComponent {
  @Input() basket: CustomerBasketProduct[] = [];

  /*public basketData = [
    {
      image:
        'https://fastly.picsum.photos/id/5/200/300.jpg?hmac=1TWjKFT7_MRP0ApEyDUA3eCP0HXaKTWJfHgVjwGNoZU',
      name: 'Product 1',
      price: 100,
      quantity: 1,
      priceTotal: 100,
      countInCase: 12,
      uom: '1л',
      available: 100,
      promo: 7.25,
      case: 0.08,
    },
  ];*/
}
