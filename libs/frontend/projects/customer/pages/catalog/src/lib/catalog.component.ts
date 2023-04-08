import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';
import { CustomerCatalogService } from '@app/frontend/services';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [SideBarMenuComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
  constructor(private catalogService: CustomerCatalogService) {}

  ngOnInit() {
    this.catalogService.getCategories();
    this.catalogService.getSubSuppliers();
  }
}
