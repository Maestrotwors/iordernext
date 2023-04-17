export interface CustomerProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  available: number;
}

export interface CustomerProductMapped extends CustomerProduct {
  inBasket: number;
}
