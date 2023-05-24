import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { ApiRequestGetOrderQuery } from '@api-models/customer/order';

export class ApiRequestGetOrderQueryValidator implements ApiRequestGetOrderQuery {
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

