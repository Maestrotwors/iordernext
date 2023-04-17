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
          import('@frontend/supplier/pages/clients').then(
            (c) => c.ClientsComponent
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'goods-catalog',
        loadComponent: () =>
          import('@frontend/supplier/pages/goods-catalog').then(
            (c) => c.GoodsCatalogComponent
          ),
        data: {
          preloadAfter: 550,
        },
      },
      {
        path: 'recommended-menu',
        loadComponent: () =>
          import('@frontend/supplier/pages/recommended').then(
            (c) => c.RecommendedComponent
          ),
        data: {
          preloadAfter: 1250,
        },
      },
      {
        path: 'insufficient-goods-catalog',
        loadComponent: () =>
          import('@frontend/supplier/pages/not-enough-goods').then(
            (c) => c.NotEnoughGoodsComponent
          ),
        data: {
          preloadAfter: 1450,
        },
      },
      {
        path: 'orders-list',
        loadComponent: () =>
          import('@frontend/supplier/pages/orders').then(
            (c) => c.OrdersComponent
          ),
        data: {
          preloadAfter: 1050,
        },
      },
      {
        path: 'cooperation-requests-list',
        loadComponent: () =>
          import('@frontend/supplier/pages/cooperation-request').then(
            (c) => c.CooperationRequestsComponent
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('@frontend/supplier/pages/provider').then(
            (c) => c.ProviderComponent
          ),
        data: {},
      },
      {
        path: 'regions',
        loadComponent: () =>
          import('@frontend/supplier/pages/regions').then(
            (c) => c.RegionsComponent
          ),
        data: {},
      },
      {
        path: 'import-catalog',
        loadComponent: () =>
          import('@frontend/supplier/pages/import-catalog').then(
            (c) => c.ImportCatalogComponent
          ),
        data: {},
      },
      {
        path: 'promos',
        loadComponent: () =>
          import('@frontend/supplier/pages/promos').then(
            (c) => c.PromosComponent
          ),
        data: {},
      },
      { path: '*', redirectTo: 'clients', pathMatch: 'full' },
    ],
  },
];
