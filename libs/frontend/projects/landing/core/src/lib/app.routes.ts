import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@frontend/projects/landing/features/landing').then(
        (c) => c.LandingComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('@frontend/projects/landing/features/contact-us').then(
        (c) => c.ContactUsComponent
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('@frontend/projects/landing/features/sign-in').then(
        (c) => c.SignInComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('@frontend/projects/landing/features/sign-up').then(
        (c) => c.SignUpComponent
      ),
  },
  { path: 'signIn', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'sign-in', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'login', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'logIn', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'sign-up', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signUp', redirectTo: 'signup', pathMatch: 'full' },
  { path: '*', redirectTo: '', pathMatch: 'full' },
];
