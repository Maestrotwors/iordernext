import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProductById(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });
  }
}
