import { ApiRequestRefreshTokenBody } from '@api-models/shared/auth';
import { IsNotEmpty, IsString } from 'class-validator';

export class ApiRequestRefreshTokenBodyValidator
  implements ApiRequestRefreshTokenBody
{
  @IsNotEmpty({ message: 'refreshToken is empty' })
  @IsString()
  public refreshToken: string;
}