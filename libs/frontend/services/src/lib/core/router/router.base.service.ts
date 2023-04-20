import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterBaseService {
  constructor(protected router: Router) {}

  navigateWithQueryParams(params: object) {
    this.router.navigate([], {
      queryParams: { ...params },
      queryParamsHandling: 'merge',
    });
  }

  navigateTo(path: string, params: object) {
    this.router.navigate([path], {
      queryParams: { ...params }
    });
  }
}
