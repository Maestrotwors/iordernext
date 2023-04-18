import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { Injectable } from '@angular/core';
import { Role } from '@api-models/shared/auth';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root'})
export class UserRoleGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean {
    const role: Role = this.userService.getUserRole();
    const activatedRole = route.data['activateRole'] as Role;
    return role === activatedRole;
  }
}
