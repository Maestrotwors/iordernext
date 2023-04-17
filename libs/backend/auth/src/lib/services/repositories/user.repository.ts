import { PrismaService } from '@backend/repository';
import { Injectable } from "@nestjs/common";
import { UserEntity} from '@backend/models/shared/auth/entities';

@Injectable()
export class UserRepository {
  constructor(private db: PrismaService) {}

  async getUserByLogin(login: string) {
    const user: UserEntity | null = await this.db.user.findUnique({
      where: { login },
    });
    return !user ? null : user;
  }

  async getUserById(id): Promise<UserEntity | null> {
    const user: UserEntity | null = await this.db.user.findUnique({
      where: { id },
    });
    return !user ? null : user;
  }
  /*

  async signup(data: SignUpDto) {
    await this.db.user.create({ data });
  }

  async updateUserCreds(payload: ChangePasswordDto) {
    return await this.db.user.update({
      where: { login: payload.login },
      data: { password: payload.newPassword },
    });
  }*/
}
