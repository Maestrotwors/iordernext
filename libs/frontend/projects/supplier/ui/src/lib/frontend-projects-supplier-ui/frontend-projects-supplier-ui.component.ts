import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-frontend-projects-supplier-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-projects-supplier-ui.component.html',
  styleUrls: ['./frontend-projects-supplier-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendProjectsSupplierUiComponent {}
