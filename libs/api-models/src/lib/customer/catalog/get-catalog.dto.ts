import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  available: number;
}

export class ApiRequestGetProductsQuery {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  page!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  take!: number;
}

export interface ApiResponseGetProducts {
  productsCount: number;
  products: Product[];
}
