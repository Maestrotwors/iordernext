import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transport-models-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transport-models-admin.component.html',
  styleUrls: ['./transport-models-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransportModelsAdminComponent {}
