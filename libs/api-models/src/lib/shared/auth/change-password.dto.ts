import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class ApiRequestChangePasswordBody {
  @IsNotEmpty({ message: 'oldPassword is empty' })
  @IsString()
  oldPassword!: string;

  @IsNotEmpty({ message: 'newPassword is empty' })
  @IsString()
  newPassword!: string;
}
