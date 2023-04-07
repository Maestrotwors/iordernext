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
          import('@app/frontend/projects/suppliers/pages/clients').then(
            (c) => c.ClientsComponent
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'goods-catalog',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/goods-catalog').then(
            (c) => c.GoodsCatalogComponent
          ),
        data: {
          preloadAfter: 550,
        },
      },
      {
        path: 'recommended-menu',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/recommended').then(
            (c) => c.RecommendedComponent
          ),
        data: {
          preloadAfter: 1250,
        },
      },
      {
        path: 'insufficient-goods-catalog',
        loadComponent: () =>
          import(
            '@app/frontend/projects/suppliers/pages/not-enough-goods'
          ).then((c) => c.NotEnoughGoodsComponent),
        data: {
          preloadAfter: 1450,
        },
      },
      {
        path: 'orders-list',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/orders').then(
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
            '@app/frontend/projects/suppliers/pages/cooperation-requests'
          ).then((c) => c.CooperationRequestsComponent),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/provider').then(
            (c) => c.ProviderComponent
          ),
        data: {},
      },
      {
        path: 'regions',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/regions').then(
            (c) => c.RegionsComponent
          ),
        data: {},
      },
      {
        path: 'import-catalog',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/import-catalog').then(
            (c) => c.ImportCatalogComponent
          ),
        data: {},
      },
      {
        path: 'promos',
        loadComponent: () =>
          import('@app/frontend/projects/suppliers/pages/promos').then(
            (c) => c.PromosComponent
          ),
        data: {},
      },
    ],
  },
];
