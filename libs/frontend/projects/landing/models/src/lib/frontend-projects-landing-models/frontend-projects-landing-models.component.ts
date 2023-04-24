import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iorder-frontend-projects-landing-models',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-projects-landing-models.component.html',
  styleUrls: ['./frontend-projects-landing-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontendProjectsLandingModelsComponent {}
