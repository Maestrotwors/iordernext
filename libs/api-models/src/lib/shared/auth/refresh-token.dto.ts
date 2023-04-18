import { IsNotEmpty, IsString } from 'class-validator';

export class ApiRequestRefreshTokenBody {
  @IsNotEmpty({ message: 'refreshToken is empty' })
  @IsString()
  public refreshToken!: string;
}

export class ApiResponseRefreshToken {
  access_token!: string;
  refresh_token!: string;
}
