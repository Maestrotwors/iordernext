import { PromosMenuComponent } from './components/promos-menu/promos-menu.component';
import { PromosDataComponent } from './components/promos-data/promos-data.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promos',
  standalone: true,
  imports: [CommonModule, PromosDataComponent, PromosMenuComponent],
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromosComponent {}
