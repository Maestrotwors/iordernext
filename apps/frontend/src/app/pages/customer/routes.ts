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
          import('@frontend/customer/pages/suppliers').then(
            (c) => c.SuppliersComponent
          ),
        data: {
          preloadAfter: 1500
        },
      },
      {
        path: 'catalog',
        loadChildren: () =>
          import('@frontend/customer/pages/catalog').then(
            (m) => m.CatalogModule
          ),
        data: {
          preloadAfter: 250,
        },
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('@frontend/customer/pages/contact-us').then(
            (c) => c.ContactUsComponent
          ),
        data: {
          preloadAfter: 990,
        },
      },
      {
        path: 'order',
        loadComponent: () =>
          import('@frontend/customer/pages/order').then(
            (c) => c.OrderComponent
          ),
        data: {
          preloadAfter: 900,
        },
      },
      {
        path: 'order/final-page',
        loadComponent: () =>
          import('@frontend/customer/pages/order-final-page').then(
            (c) => c.OrderFinalPageComponent
          ),
        data: {
          preloadAfter: 8000,
        },
      },
      {
        path: 'delivery',
        loadComponent: () =>
          import('@frontend/customer/pages/delivery').then(
            (c) => c.DeliveryComponent
          ),
      },
      {
        path: 'how-to-use',
        loadComponent: () =>
          import('@frontend/customer/pages/how-to-use').then(
            (c) => c.HowToUseComponent
          ),
      },
      {
        path: 'refund',
        loadComponent: () =>
          import('@frontend/customer/pages/refund').then(
            (c) => c.RefundComponent
          ),
      },
      {
        path: 'rules',
        loadComponent: () =>
          import('@frontend/customer/pages/rules').then(
            (c) => c.RulesComponent
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@frontend/customer/pages/profile').then(
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
