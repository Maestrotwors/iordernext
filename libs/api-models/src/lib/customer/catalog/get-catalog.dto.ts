export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  available: number;
}

export interface ApiRequestGetProductsQuery {
  page: number;
  take: number;
  category?: number;
}

export interface ApiResponseGetProducts {
  productsCount: number;
  products: Product[];
}
