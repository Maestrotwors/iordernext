import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { ApiRequestGetProductQuery } from '@api-models/customer/product';

export class ApiRequestGetProductQueryValidator implements ApiRequestGetProductQuery {
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
