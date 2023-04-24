import { Role } from './role/roles';

export interface ApiRequestLogInBody {
  login: string;
  password: string;
}

export interface ApiResponseLogIn {
  accessToken: string;
  refreshToken: string;
  memberShipType: Role;
}
