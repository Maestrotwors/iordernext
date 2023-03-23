import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromosComponent {}
