import { Product } from '@api-models/customer/product';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CurrentProduct extends Product {
  //test
  //someKey: string;
}
export interface CurrentProductMapped extends CurrentProduct {
  inBasket: number;
}
