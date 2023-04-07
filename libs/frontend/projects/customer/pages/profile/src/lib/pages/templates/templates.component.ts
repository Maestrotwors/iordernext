import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-templates',
  standalone: true,
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {}
