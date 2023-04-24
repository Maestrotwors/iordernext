import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-frontend-projects-supplier-models',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-projects-supplier-models.component.html',
  styleUrls: ['./frontend-projects-supplier-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendProjectsSupplierModelsComponent {}
