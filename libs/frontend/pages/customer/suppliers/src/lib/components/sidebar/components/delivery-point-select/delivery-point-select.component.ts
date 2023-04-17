import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-delivery-point-select',
  standalone: true,
  imports: [CommonModule, NzInputModule, ListComponent],
  templateUrl: './delivery-point-select.component.html',
  styleUrls: ['./delivery-point-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryPointSelectComponent {}
