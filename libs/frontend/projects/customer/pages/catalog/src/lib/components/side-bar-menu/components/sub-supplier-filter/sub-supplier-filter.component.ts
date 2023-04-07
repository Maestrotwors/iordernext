import { SelectComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-sub-supplier-filter',
  standalone: true,
  imports: [CommonModule, SelectComponent],
  templateUrl: './sub-supplier-filter.component.html',
  styleUrls: ['./sub-supplier-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubSupplierFilterComponent {
  constructor() {}

  protected subSuppliers: BehaviorSubject<any> = new BehaviorSubject([]);
}
