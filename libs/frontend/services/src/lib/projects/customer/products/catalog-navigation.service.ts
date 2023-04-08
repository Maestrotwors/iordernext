import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerCatalogNavigationService {
  constructor(
    private router: Router
  ) {}

  goToCatalog() {
    this.router.navigateByUrl('member-user/catalog');
  }
}
