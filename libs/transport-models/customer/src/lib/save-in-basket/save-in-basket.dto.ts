import { IsNotEmpty } from 'class-validator';

export class ApiRequestSaveInBasket {
  @IsNotEmpty({ message: 'productId is empty' })
  productId!: number;

  @IsNotEmpty({ message: 'count is empty' })
  count!: number;

}

// TODO extend
export interface ApiSaveInBasket {
  ok: boolean;
}
