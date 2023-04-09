import { CustomerProduct } from '@app/frontend/models';

export interface ApiGetCatalog {
  productsCount: number;
  products: CustomerProduct[];
}
