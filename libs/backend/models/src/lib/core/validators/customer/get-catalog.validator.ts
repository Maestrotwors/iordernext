import { ApiRequestGetProductsQuery } from '@api-models/customer/catalog';
import { Optional } from '@nestjs/common/decorators';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ApiRequestGetProductsQueryValidator
  implements ApiRequestGetProductsQuery
{
  @Transform(({ value }) => Number(value))
  @IsNumber()
  page!: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  take!: number;

  @Optional()
  @Transform(({ value }) => Number(value))
  @IsNumber()
  category!: number;
}
