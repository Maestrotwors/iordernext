import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'member-user',
    loadChildren: () =>
      import('./pages/customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'member-supplier',
    loadChildren: () =>
      import('./pages/supplier/supplier.module').then((m) => m.SupplierModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  { path: '*', redirectTo: '', pathMatch: 'full' }
];
