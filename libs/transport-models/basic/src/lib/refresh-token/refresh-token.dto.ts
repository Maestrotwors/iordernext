import { IsNotEmpty } from 'class-validator';

export class ApiRequestRefreshToken {
  @IsNotEmpty({ message: 'refreshToken is empty' })
  refreshToken!: string;
}

export class ApiResponseRefreshToken {
  access_token!: string;
  refresh_token!: string;
}
