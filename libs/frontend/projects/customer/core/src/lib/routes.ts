import { CustomerComponent } from './customer.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'contracts',
        loadComponent: () =>
          import('@frontend/projects/customer/features/contracts').then(
            (c) => c.SuppliersComponent
          ),
        data: {
          preloadAfter: 1500,
        },
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('@frontend/projects/customer/features/catalog').then(
            (m) => m.CatalogModule
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('@frontend/projects/customer/features/contact-us').then(
            (c) => c.ContactUsComponent
          ),
        data: {
          preloadAfter: 990,
        },
      },
      {
        path: 'order',
        loadComponent: () =>
          import('@frontend/projects/customer/features/order').then(
            (c) => c.OrderComponent
          ),
        data: {
          preloadAfter: 900,
        },
      },
      {
        path: 'order/final-page',
        loadComponent: () =>
          import('@frontend/projects/customer/features/order-final-page').then(
            (c) => c.OrderFinalPageComponent
          ),
        data: {
          preloadAfter: 8000,
        },
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('@frontend/projects/customer/features/delivery').then(
            (c) => c.DeliveryComponent
          ),
      },
      {
        path: 'how-to-use',
        loadComponent: () =>
          import('@frontend/projects/customer/features/how-to-use').then(
            (c) => c.HowToUseComponent
          ),
      },
      {
        path: 'refund',
        loadComponent: () =>
          import('@frontend/projects/customer/features/refund').then(
            (c) => c.RefundComponent
          ),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('@frontend/projects/customer/features/rules').then(
            (c) => c.RulesComponent
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@frontend/projects/customer/features/profile').then(
            (m) => m.ProfileModule
          ),
        data: {
          preloadAfter: 800,
        },
      },
      { path: '*', redirectTo: 'suppliers', pathMatch: 'full' },
    ],
  },
];
