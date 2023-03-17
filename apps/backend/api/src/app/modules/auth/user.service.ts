import { compare, hash }  from "bcrypt";

import { ChangePasswordDataDto } from './dto/change-password.dto';
import { Injectable } from "@nestjs/common";
import { SignUpDto } from './dto/signup.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { env } from '@base/config/dev.env';

@Injectable()
export class UserService {
	constructor(private userRepository: UserRepository) {}

	async getUserByCreds(login: string, password: string) {
		const user = await this.userRepository.getUserByLogin(login);
		if (!user) {
			return null;
		}

		const isMatch = await compare(password, user.password);
		return isMatch ? user : null;
	}

	async getUserById(id): Promise<UserEntity | null> {
		const user = await this.userRepository.getUserById(id);
		return !user ? null : user;
	}

	async getUserByLogin(login): Promise<UserEntity | null> {
		const user = await this.userRepository.getUserByLogin(login);
		return !user ? null : user;
	}

	async verifyUser(user, password: string) {
		const isMatch = await compare(password, user.password);
		return isMatch ? user : null;
	}

	async signup(data: SignUpDto) {
		data.password = await hash(data.password, env.HASH_ROUNDS);
		return await this.userRepository.signup(data);
	}

	async changePassword(data: ChangePasswordDataDto) {
		return await this.userRepository.updateUserCreds(data);
	}
}
