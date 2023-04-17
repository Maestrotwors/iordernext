import { IsNotEmpty, IsString } from 'class-validator';

export class ApiRequestBodyRefreshToken {
  @IsNotEmpty({ message: 'refreshToken is empty' })
  @IsString()
  public refreshToken!: string;
}

export class ApiResponseRefreshToken {
  access_token!: string;
  refresh_token!: string;
}
