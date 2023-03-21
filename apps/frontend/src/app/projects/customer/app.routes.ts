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
          preloadAfter: 1800,
        },
      },
      {
        path: 'order',
        loadComponent: () =>
          import('./pages/order/order.component').then((c) => c.OrderComponent),
        data: {
          preloadAfter: 1900,
        },
      },
    ],
  },
];
