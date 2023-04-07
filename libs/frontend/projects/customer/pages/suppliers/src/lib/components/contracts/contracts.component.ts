import { fadeInAnimation } from '@app/frontend/animations';
import { SupplierEmblemBigComponent } from '@app/frontend/ui';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  constructor() {}

  suppliers: BehaviorSubject<any> = new BehaviorSubject([]);

  identify(index: number, el: any): number {
    return el.id;
  }
}
