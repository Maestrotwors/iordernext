import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketService {
  constructor(private prisma: PrismaService) {}

  async getMyBasket(userId: number, query: object = {}) {
    console.log(userId);
    console.log(query);
    return await this.prisma.basket.findMany({});
  }
}
