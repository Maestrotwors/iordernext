import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { OfflineService } from '@app-services/offline/offline.service';
import { onlineStatus } from '@app-services/offline/online-status.type';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [],
})
export class SupplierComponent {
  constructor(protected offlineService: OfflineService
  ) {}

  onlineStatus = onlineStatus;
}
