import { Route } from '@angular/router';
import { SupplierComponent } from './supplier.component';

export const routes: Route[] = [
  {
    path: '',
    component: SupplierComponent,
    children: [
      {
        path: 'clients',
        loadComponent: () =>
          import('./pages/clients/clients.component').then(
            (c) => c.ClientsComponent
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'goods-catalog',
        loadComponent: () =>
          import('./pages/goods-catalog/goods-catalog.component').then(
            (c) => c.GoodsCatalogComponent
          ),
        data: {
          preloadAfter: 550,
        },
      },
      {
        path: 'recommended-menu',
        loadComponent: () =>
          import('./pages/recommended/recommended.component').then(
            (c) => c.RecommendedComponent
          ),
        data: {
          preloadAfter: 1250,
        },
      },
      {
        path: 'insufficient-goods-catalog',
        loadComponent: () =>
          import('./pages/not-enough-goods/not-enough-goods.component').then(
            (c) => c.NotEnoughGoodsComponent
          ),
        data: {
          preloadAfter: 1450,
        },
      },
      {
        path: 'orders-list',
        loadComponent: () =>
          import('./pages/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
        data: {
          preloadAfter: 1050,
        },
      },
      {
        path: 'cooperation-requests-list',
        loadComponent: () =>
          import(
            './pages/cooperation-requests/cooperation-requests.component'
          ).then((c) => c.CooperationRequestsComponent),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/provider/provider.component').then(
            (c) => c.ProviderComponent
          ),
        data: {},
      },
      {
        path: 'regions',
        loadComponent: () =>
          import('./pages/regions/regions.component').then(
            (c) => c.RegionsComponent
          ),
        data: {},
      },
      {
        path: 'import-catalog',
        loadComponent: () =>
          import('./pages/import-catalog/import-catalog.component').then(
            (c) => c.ImportCatalogComponent
          ),
        data: {},
      },
      {
        path: 'promos',
        loadComponent: () =>
          import('./pages/promos/promos.component').then(
            (c) => c.PromosComponent
          ),
        data: {},
      },
    ],
  },
];
