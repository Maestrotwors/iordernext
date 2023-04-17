import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '@frontend/ui';

@Component({
  selector: 'app-order-units',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './order-units.component.html',
  styleUrls: ['./order-units.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderUnitsComponent {}
