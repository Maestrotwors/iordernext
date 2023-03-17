import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'suppliers',
    loadComponent: () =>
      import('./pages/suppliers/suppliers.component').then(
        (c) => c.SuppliersComponent
      ),
  },
  {
    path: 'catalog',
    loadComponent: () =>
      import('./pages/catalog/catalog.component').then((c) => c.CatalogComponent),
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./pages/order/order.component').then((c) => c.OrderComponent),
  },
];
