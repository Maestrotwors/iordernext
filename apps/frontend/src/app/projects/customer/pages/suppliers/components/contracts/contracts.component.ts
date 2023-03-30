import { fadeInAnimation } from './../../../../../../shared/animations/fade-in.animation';
import { SupplierEmblemBigComponent } from './../../../../components/supplier/supplier-emblem-big/supplier-emblem-big.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '@app-services/store/store/store.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-contracts-suppliers',
  standalone: true,
  imports: [CommonModule, SupplierEmblemBigComponent],
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation]
})
export class ContractsComponent {
  constructor(protected storeService: StoreService) {}

  suppliers: BehaviorSubject<any> =
    this.storeService.store.account.suppliers;

  identify(index: number, el: any): number {
    return el.id;
  }
}
