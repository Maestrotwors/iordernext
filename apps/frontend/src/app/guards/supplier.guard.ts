import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';

@Injectable()
export class IsSupplierGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    const customer = localStorage.getItem('MemberShipType');
    if (customer === 'Supplier') {
      return true;
    }
    localStorage.clear();
    this.router.navigateByUrl('');
    return false;
  }
}
