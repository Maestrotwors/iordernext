import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '@frontend/core/shared/services/user';
import { Injectable } from '@angular/core';
import { Role } from '@api-models/shared/auth';

@Injectable({ providedIn: 'root' })
export class UserRoleGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role: Role = this.userService.getUserRole();
    const activatedRole = route.data['activateRole'] as Role;
    const response = role === activatedRole;
    if (!response) {
      this.router.navigate(['/']);
    }
    return role === activatedRole;
  }
}
