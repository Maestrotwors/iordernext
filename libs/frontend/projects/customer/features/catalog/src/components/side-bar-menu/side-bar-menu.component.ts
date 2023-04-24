import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CatalogInfoComponent } from './components/catalog-info/catalog-info.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CommonModule } from '@angular/common';
import { RecommendedListComponent } from './components/recommended-list/recommended-list.component';
import { SubSupplierFilterComponent } from './components/sub-supplier-filter/sub-supplier-filter.component';
import { ContractEmblemBigComponent } from '@frontend/projects/customer/ui/contract-emblem/contract-emblem-big';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [
    CommonModule,
    RecommendedListComponent,
    CategoriesListComponent,
    CatalogInfoComponent,
    SubSupplierFilterComponent,
    ContractEmblemBigComponent
  ],
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarMenuComponent {
  constructor(private router: Router) {}

  goToContracts() {
    this.router.navigate(['member-user/suppliers']);
  }
}
