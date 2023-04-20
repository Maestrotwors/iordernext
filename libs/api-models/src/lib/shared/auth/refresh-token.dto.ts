export interface ApiRequestRefreshTokenBody {
  refreshToken: string;
}

export interface ApiResponseRefreshToken {
  access_token: string;
  refresh_token: string;
}
