import { ApiRequestGetProductsQuery } from '@api-models/customer/catalog';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ApiRequestGetProductsQueryValidator implements ApiRequestGetProductsQuery {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  page!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  take!: number;
}
