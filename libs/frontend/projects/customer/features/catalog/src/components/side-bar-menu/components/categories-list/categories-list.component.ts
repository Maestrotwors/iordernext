import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { CategoriesStore } from '../../../../store/categories.store';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '@frontend/projects/customer/models';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule, ListboxModule, FormsModule],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent {
  constructor(private categoriesStore: CategoriesStore) {}

  public categories = this.categoriesStore.categories$ as Observable<Category[]>;
  //public selectedCategory;
}
