import { ApiRequestChangePasswordBody } from '@api-models/shared/auth';
import { IsNotEmpty, IsString } from 'class-validator';

export class ApiRequestChangePasswordBodyValidator
  implements ApiRequestChangePasswordBody
{
  @IsNotEmpty({ message: 'oldPassword is empty' })
  @IsString()
  oldPassword!: string;

  @IsNotEmpty({ message: 'newPassword is empty' })
  @IsString()
  newPassword!: string;
}
