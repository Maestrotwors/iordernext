import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-delivery-point-select',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './delivery-point-select.component.html',
  styleUrls: ['./delivery-point-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryPointSelectComponent {}
