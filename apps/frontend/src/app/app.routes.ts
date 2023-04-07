import { IsCustomerGuard } from './guards/customer.guard';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@base/apps/frontend/src/app/pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'member-user',
    canActivate: [IsCustomerGuard],
    loadChildren: () =>
      import('@base/apps/frontend/src/app/pages/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'member-supplier',
    loadChildren: () =>
      import('@base/apps/frontend/src/app/pages/supplier/supplier.module').then(
        (m) => m.SupplierModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@base/apps/frontend/src/app/pages/landing/landing.module').then((m) => m.LandingModule),
  },
];
