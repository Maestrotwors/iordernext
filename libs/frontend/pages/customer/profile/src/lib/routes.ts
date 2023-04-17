import { ProfileComponent } from './profile.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/orders/orders.component').then(
            (c) => c.ProfileOrdersComponent
          ),
        data: {
          preloadAfter: 400,
        },
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
        data: {
          preloadAfter: 500,
        },
      },
      {
        path: 'templates',
        loadComponent: () =>
          import('./pages/templates/templates.component').then(
            (c) => c.TemplatesComponent
          ),
        data: {
          preloadAfter: 700,
        },
      },
      {
        path: '**',
        redirectTo: 'orders'
      },
    ],
  },
];
