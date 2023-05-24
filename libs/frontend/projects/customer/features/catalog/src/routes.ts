import { CatalogComponent } from './catalog.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: ':categoryId',
        loadComponent: () =>
          import('./pages/catalog-content/catalog-content.component').then(
            (c) => c.CatalogContentComponent
          ),
        data: {
          preloadAfter: 300,
        },
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product/product.component').then(
            (c) => c.ProductComponent
          ),
        data: {
          preloadAfter: 400,
        },
      },
      {
        path: '',
        loadComponent: () =>
          import('./pages/catalog-content/catalog-content.component').then(
            (c) => c.CatalogContentComponent
          ),
        data: {
          preloadAfter: 300,
        },
      },
    ],
  },
];
