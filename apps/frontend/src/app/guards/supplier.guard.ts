import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '@app/frontend/services';

@Injectable()
export class IsSupplierGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const customer = localStorage.getItem('memberShipType');
    if (customer === 'Supplier') {
      return true;
    }
    this.authService.logOut();
    return false;
  }
}
