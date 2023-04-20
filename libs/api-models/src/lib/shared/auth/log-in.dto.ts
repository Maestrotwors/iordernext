import { Role } from './role/roles';

export interface ApiRequestLogInBody {
  login: string;
  password: string;
}

export interface ApiResponseLogIn {
  access_token: string;
  refresh_token: string;
  memberShipType: Role;
}
