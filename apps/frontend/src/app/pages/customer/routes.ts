import { CustomerComponent } from './customer.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'suppliers',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/suppliers').then(
            (c) => c.SuppliersComponent
          ),
        data: {
          preloadAfter: 1500,
        },
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('@app/frontend/projects/customer/pages/catalog').then(
            (m) => m.CatalogModule
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/contact-us').then(
            (c) => c.ContactUsComponent
          ),
        data: {
          preloadAfter: 990,
        },
      },
      {
        path: 'order',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/order').then(
            (c) => c.OrderComponent
          ),
        data: {
          preloadAfter: 900,
        },
      },
      {
        path: 'order/final-page',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/order-final-page').then(
            (c) => c.OrderFinalPageComponent
          ),
        data: {
          preloadAfter: 8000,
        },
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/delivery').then(
            (c) => c.DeliveryComponent
          ),
      },
      {
        path: 'how-to-use',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/how-to-use').then(
            (c) => c.HowToUseComponent
          ),
      },
      {
        path: 'refund',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/refund').then(
            (c) => c.RefundComponent
          ),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('@app/frontend/projects/customer/pages/rules').then(
            (c) => c.RulesComponent
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@app/frontend/projects/customer/pages/profile').then(
            (m) => m.ProfileModule
          ),
        data: {
          preloadAfter: 800,
        },
      },
    ],
  },
];
