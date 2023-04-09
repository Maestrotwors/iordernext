import { ApiRequestSaveInBasket } from '@app/transport-models/customer';
import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketService {
  constructor(private prisma: PrismaService) {}

  async getMyBasket(userId: number, query: object = {}) {
    return await this.prisma.basket.findMany({});
  }

  // TODO add class validator
  async saveInBasket(userId: number, body: ApiRequestSaveInBasket) {
    if (body.count > 0) {
      await this.prisma.basket.upsert({
        where: {
          user_subSupplier_product_index: {
            userId,
            productId: body.productId,
            subSupplierId: 1,
          },
        },
        create: {
          userId,
          productId: body.productId,
          subSupplierId: 1,
          quantity: body.count,
        },
        update: {
          quantity: body.count,
        },
      });
    } else {
      await this.prisma.basket.delete({
        where: {
          user_subSupplier_product_index: {
            userId,
            productId: body.productId,
            subSupplierId: 1,
          },
        },
      });
    }
  }
}
