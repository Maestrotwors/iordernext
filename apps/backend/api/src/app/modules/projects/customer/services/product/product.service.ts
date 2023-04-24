import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';
import { ApiRequestGetProductQuery, ApiResponseGetProduct } from '@api-models/customer/product';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProduct(
    query: ApiRequestGetProductQuery
  ): Promise<ApiResponseGetProduct> {
    return await this.prisma.product.findUnique({
      where: {
        id: query.id
      }
    });
  }
}
