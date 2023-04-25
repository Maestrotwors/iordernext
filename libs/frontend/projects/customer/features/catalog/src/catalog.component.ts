import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CategoriesService } from './services/categories.service';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { CategoriesStore } from './store/categories.store';


@UntilDestroy()
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  standalone: true,
  imports: [SideBarMenuComponent, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoriesService, CategoriesStore]
})
export class CatalogComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
    this.categoriesService.getCategories({})
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe();
  }
}
