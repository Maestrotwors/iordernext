import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-frontend-projects-admin-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-projects-admin-ui.component.html',
  styleUrls: ['./frontend-projects-admin-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendProjectsAdminUiComponent {}
