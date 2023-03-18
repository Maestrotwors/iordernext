import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class IsCustomerGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const customer = localStorage.getItem('memberShipType');
    if (customer === 'PublicUser') {
      return true;
    }
    localStorage.clear();
    this.router.navigateByUrl('');
    return false;
  }
}
