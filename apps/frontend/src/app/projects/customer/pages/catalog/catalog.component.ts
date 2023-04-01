import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CatalogContentComponent } from './components/catalog-content/catalog-content.component';
import { SideBarMenuComponent } from '../../components/side-bar-menu/side-bar-menu.component';
import { TopBarMenuComponent } from './components/top-bar-menu/top-bar-menu.component';
import { CatalogService } from '../../services/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [SideBarMenuComponent, CatalogContentComponent, TopBarMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  constructor(private catalogService: CatalogService) {}

  ngOnInit() {
    this.catalogService.getCatalog();
    this.catalogService.getCategories();
    this.catalogService.getSubSuppliers();
  }
}
