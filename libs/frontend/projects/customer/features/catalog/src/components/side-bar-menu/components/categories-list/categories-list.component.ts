import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListboxModule } from 'primeng/listbox';
import { CategoriesStore } from '../../../../store/categories.store';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '@frontend/projects/customer/models';
import { RouterLinkWithHref, Router, ActivatedRoute, Params, Data } from '@angular/router';
import { ContractService } from '@frontend/projects/customer/shared/services/contract';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';

@UntilDestroy()
@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule, ListboxModule, FormsModule, RouterLinkWithHref],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent implements OnInit {
  constructor(
    private categoriesStore: CategoriesStore,
    private contractService: ContractService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public categories = this.categoriesStore.categories$ as Observable<
    Category[]
  >;

  contractQueryParams = {
    ...this.contractService.getContractQueryParams(),
    page: 1,
  };

  selectedCategory = {
    id: 1,
    name: 'Category 1',
    parentId: null,
  };

  ngOnInit(): void {
    this.subscribeToRouterParams();
  }

  // todo: fix
  selectCategory(categoryId: number) {
    console.log(categoryId);
    if (categoryId > 0) {
      this.router.navigate(['/', 'member-user', 'catalog', categoryId], {
        queryParamsHandling: 'merge',
      });
    } else {
      this.router.navigate(['/', 'member-user', 'catalog'], {
        queryParamsHandling: 'merge',
      });
    }
  }

  // todo - доделать
  subscribeToRouterParams() {
    this.route.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      console.log(params);
      console.log(this.route.snapshot.data);
    });
  }
}
