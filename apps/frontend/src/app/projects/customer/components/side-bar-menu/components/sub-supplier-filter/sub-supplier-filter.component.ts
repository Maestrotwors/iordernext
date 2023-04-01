import { SelectComponent } from '@base/apps/frontend/src/app/shared/components/select/select.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@app-services/store/store/store.service';
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
  constructor(private storeService: StoreService) {}

  protected subSuppliers: BehaviorSubject<any> =
    this.storeService.store.account.catalog.subSuppliers;
}
