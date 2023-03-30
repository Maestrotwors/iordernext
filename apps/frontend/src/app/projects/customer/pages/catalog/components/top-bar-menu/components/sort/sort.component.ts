import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '@base/apps/frontend/src/app/shared/components/select/select.component';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent {}
