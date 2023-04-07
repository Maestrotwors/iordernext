import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transport-models-basic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transport-models-basic.component.html',
  styleUrls: ['./transport-models-basic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportModelsBasicComponent {}
