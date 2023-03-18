import { IsCustomerGuard } from './guards/customer.guard';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../../../projects/landing/landing.module').then(
        (m) => m.LandingModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@frontend/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'member-user',
    canActivate: [IsCustomerGuard],
    loadChildren: () =>
      import('@frontend/customer/customer.module').then(
        (m) => m.CustomerModule
      ),
  },
  {
    path: 'member-supplier',
    loadChildren: () =>
      import('@frontend/supplier/supplier.module').then(
        (m) => m.SupplierModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@frontend/landing/landing.module').then((m) => m.LandingModule),
  },
];
