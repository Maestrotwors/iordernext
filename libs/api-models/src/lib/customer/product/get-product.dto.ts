export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  available: number;
}

export interface ApiRequestGetProductQuery {
  id: number;
  sId: number;
  dp: number;
  le: number;
}

export type ApiResponseGetProduct = Product;
