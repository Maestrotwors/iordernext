import { Route } from '@angular/router';
import { Role } from '@api-models/shared/auth';
import { userRoleGuard } from './guards/role.guard';

export const routes: Route[] = [
  {
    path: 'member-user',
    loadChildren: () =>
      import('@frontend/projects/customer/core').then((m) => m.CustomerModule),
    canActivate: [userRoleGuard],
    data: {
      activateRole: Role.Customer,
    },
  },
  /*{
    path: 'admin',
    loadChildren: () =>
      import('@frontend/projects/admin/core').then((m) => m.AdminModule),
    canActivate: [UserRoleGuard],
    data: {
      activateRole: Role.Admin,
    }
  },
  {
    path: 'member-supplier',
    loadChildren: () =>
      import('@frontend/projects/supplier/core').then((m) => m.SupplierModule),
    canActivate: [UserRoleGuard],
    data: {
      activateRole: Role.Supplier,
    }
  },*/
  {
    path: '',
    loadChildren: () =>
      import('@frontend/projects/landing/core').then((m) => m.LandingModule),
  },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];
