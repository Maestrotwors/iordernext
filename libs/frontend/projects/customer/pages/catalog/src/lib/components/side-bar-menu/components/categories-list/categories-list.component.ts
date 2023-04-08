import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCatalogCategoriesStore } from '@app/frontend/store';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent {
  constructor(private CustomerCatalogCategoriesStore: CustomerCatalogCategoriesStore) {}
  public categories = this.CustomerCatalogCategoriesStore.categories$;

  identify(index: number, item: any) {
    return item.id;
  }
}
