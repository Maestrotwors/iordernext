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
          import('./pages/suppliers/suppliers.component').then(
            (c) => c.SuppliersComponent
          ),
        data: {
          preloadAfter: 1500,
        },
      },
      {
        path: 'catalog',
        loadComponent: () =>
          import('./pages/catalog/catalog.component').then(
            (c) => c.CatalogComponent
          ),
        data: {
          preloadAfter: 400,
        },
      },
      {
        path: 'order',
        loadComponent: () =>
          import('./pages/order/order.component').then((c) => c.OrderComponent),
        data: {
          preloadAfter: 900,
        },
      },
      {
        path: 'order/final-page',
        loadComponent: () =>
          import('./pages/order-final-page/order-final-page.component').then((c) => c.OrderFinalPageComponent),
        data: {
          preloadAfter: 8000,
        },
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('./pages/delivery/delivery.component').then(
            (c) => c.DeliveryComponent
          ),
      },
      {
        path: 'how-to-use',
        loadComponent: () =>
          import('./pages/how-to-use/how-to-use.component').then(
            (c) => c.HowToUseComponent
          ),
      },
      {
        path: 'refund',
        loadComponent: () =>
          import('./pages/refund/refund.component').then(
            (c) => c.RefundComponent
          ),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('./pages/rules/rules.component').then((c) => c.RulesComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
        data: {
          preloadAfter: 800,
        },
      },
    ],
  },
];
