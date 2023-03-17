import { ChangePasswordDataDto } from '../dto/change-password.dto';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "@be-repository/services/prisma.service";
import { SignUpDto } from '../dto/signup.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
	constructor(private db: PrismaService) {}

	async getUserByLogin(login: string) {
		const user: UserEntity | null = await this.db.user.findUnique({ where: { login } });
		return !user ? null : user;
	}

	async getUserById(id): Promise<UserEntity | null> {
		const user: UserEntity | null = await this.db.user.findUnique({ where: { id } });
		return !user ? null : user;
	}

	async signup(data: SignUpDto) {
		await this.db.user.create({ data });
	}

	async updateUserCreds(payload: ChangePasswordDataDto) {
		return await this.db.user.update({
			where: { login: payload.login },
			data: { password: payload.newPassword }
		});
	}
}
