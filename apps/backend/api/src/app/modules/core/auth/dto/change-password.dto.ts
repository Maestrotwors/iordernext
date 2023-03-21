import { IsNotEmpty, IsString } from "class-validator";

export class ChangePasswordDto {
	@IsNotEmpty({ message: "oldPassword is empty" })
	@IsString()
	oldPassword;

	@IsNotEmpty({ message: "newPassword is empty" })
	@IsString()
	newPassword;
}

export class ChangePasswordDataDto {
	newPassword: string;
	login: string;
}
