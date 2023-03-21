import { IsEmail, IsNotEmpty, IsString } from "class-validator";

import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
	@ApiProperty()
	@IsNotEmpty({ message: "login is empty" })
	@IsString({ message: "login is not string" })
	login;

	@ApiProperty()
	@IsNotEmpty({ message: "email is empty" })
	@IsEmail()
	email;

	@ApiProperty()
	@IsNotEmpty({ message: "password is empty" })
	@IsString({ message: "password is not string" })
	password;

	@ApiProperty()
	@IsNotEmpty({ message: "name is empty" })
	@IsString({ message: "name is not string" })
	name;
}
