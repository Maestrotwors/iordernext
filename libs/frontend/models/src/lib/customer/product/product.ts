export interface CustomerCurrentProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  available: number;
}

export interface CustomerCurrentProductMapped extends CustomerCurrentProduct {
  inBasket: number;
}
