import { Product } from '@api-models/customer/product';

export interface CustomerCurrentProduct extends Product {
  //test
  //someKey: string;
}
export interface CustomerCurrentProductMapped extends CustomerCurrentProduct {
  inBasket: number;
}
