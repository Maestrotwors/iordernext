import { Role } from './role/roles';

export interface ApiRequestRefreshTokenBody {
  refreshToken: string;
}

export interface ApiResponseRefreshToken {
  accessToken: string;
  refreshToken: string;
  memberShipType: Role;
}
