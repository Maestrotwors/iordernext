import { Product } from '@api-models/customer/catalog';

export type CustomerProduct = Product;
export interface CustomerProductMapped extends Product {
  inBasket: number;
}
