import { Route } from '@angular/router';
import { Role } from '@api-models/shared/auth';
import { UserRoleGuard } from '@frontend/services/core';

export const routes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [UserRoleGuard],
    data: {
      activateRole: Role.Admin,
    },
  },
  {
    path: 'member-user',
    loadChildren: () =>
      import('./pages/customer/customer.module').then((m) => m.CustomerModule),
    canActivate: [UserRoleGuard],
    data: {
      activateRole: Role.Customer
    },
  },
  {
    path: 'member-supplier',
    loadChildren: () =>
      import('./pages/supplier/supplier.module').then((m) => m.SupplierModule),
    canActivate: [UserRoleGuard],
    data: {
      activateRole: Role.Supplier,
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];
