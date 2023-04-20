import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  available: number;
}

export class ApiRequestGetProductQuery {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  id!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  sId!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  dp!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  le!: number;
}

export type ApiResponseGetProduct = Product;
