import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/index/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
  },
];
