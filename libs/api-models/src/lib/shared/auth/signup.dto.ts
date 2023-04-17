import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class ApiRequestBodySignUp {
  @IsNotEmpty({ message: 'login is empty' })
  @IsString({ message: 'login is not string' })
  login!: string;

  @IsNotEmpty({ message: 'email is empty' })
  @IsEmail()
  email!: string;

  @IsNotEmpty({ message: 'password is empty' })
  @IsString({ message: 'password is not string' })
  password!: string;

  @IsNotEmpty({ message: 'name is empty' })
  @IsString({ message: 'name is not string' })
  name!: string;
}
