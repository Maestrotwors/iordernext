import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transport-models-supplier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transport-models-supplier.component.html',
  styleUrls: ['./transport-models-supplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportModelsSupplierComponent {}
