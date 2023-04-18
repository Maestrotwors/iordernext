import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Role } from './role/roles';

export class ApiRequestLogInBody {
  @IsNotEmpty({ message: 'logIn is empty' })
  @IsString()
  login!: string;

  @IsNotEmpty({ message: 'password is empty' })
  @IsString()
  password!: string;
}

export class ApiResponseLogIn {
  access_token!: string;
  refresh_token!: string;
  memberShipType!: Role;
}
