import { IsNotEmpty, IsString } from "class-validator";

export class LogInDto {
	@IsNotEmpty({ message: "logIn is empty" })
	@IsString()
	login;

	@IsNotEmpty({ message: "password is empty" })
	@IsString()
	password;
}
