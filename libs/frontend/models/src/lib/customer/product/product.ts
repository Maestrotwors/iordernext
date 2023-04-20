import { Product } from '@api-models/customer/product';

export type CustomerCurrentProduct = Product;
export interface CustomerCurrentProductMapped extends CustomerCurrentProduct {
  inBasket: number;
}
