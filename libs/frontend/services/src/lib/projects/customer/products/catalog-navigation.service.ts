import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductsInfoQuery } from '@app/frontend/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerCatalogNavigationService {
  constructor(private router: Router) {}

  goToCatalog(query: ProductsInfoQuery) {
    console.log(query);
    this.router.navigate(['member-user/catalog'], {
      queryParams: query,
      queryParamsHandling: 'merge',
    });
  }
}
