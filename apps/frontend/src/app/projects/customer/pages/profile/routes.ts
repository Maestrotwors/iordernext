import { ProfileComponent } from './profile.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then(
            (c) => c.RegisterComponent
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
        redirectTo: 'register'
      },
    ],
  },
];
