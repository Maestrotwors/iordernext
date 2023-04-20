import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryPointSelectComponent } from './components/delivery-point-select/delivery-point-select.component';
import { LegalEntitySelectComponent } from './components/legal-entity-select/legal-entity-select.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CatalogActionsService } from '@frontend/services/projects/customer/catalog';

@Component({
  selector: 'app-sidebar-suppliers',
  standalone: true,
  imports: [
    CommonModule,
    DeliveryPointSelectComponent,
    LegalEntitySelectComponent,
    NzButtonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(private catalogActionsService: CatalogActionsService) {}

  goToCatalog() {
    this.catalogActionsService.selectCatalogProductsPage();
  }
}
