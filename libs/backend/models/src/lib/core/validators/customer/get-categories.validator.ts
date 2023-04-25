import { ApiRequestGetCategoriesQuery } from '@api-models/customer/catalog';
import { Optional } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ApiRequestGetCategoriesQueryValidator
  implements ApiRequestGetCategoriesQuery
{
  @Transform(({ value }) => Number(value))
  @IsNumber()
  sId!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  dp!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  le!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @Optional()
  ssId?: number;
}