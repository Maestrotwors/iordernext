import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-frontend-projects-admin-models',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-projects-admin-models.component.html',
  styleUrls: ['./frontend-projects-admin-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendProjectsAdminModelsComponent {}
