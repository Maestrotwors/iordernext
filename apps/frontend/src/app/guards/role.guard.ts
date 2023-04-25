import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '@frontend/core/shared/services/user';
import { inject } from '@angular/core';
import { Role } from '@api-models/shared/auth';

export function userRoleGuard(route: ActivatedRouteSnapshot): boolean {
    const router = inject(Router);
    const userService = inject(UserService);
    const role: Role = userService.getUserRole();
    const activatedRole = route.data['activateRole'] as Role;
    const response = role === activatedRole;
    if (!response) {
      router.navigate(['/']);
    }
    return role === activatedRole;
}
