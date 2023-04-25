import { MsProductsRequestGetProduct, MsProductsResponseGetProduct } from '@backend/microservices-models/customer/products';
import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProduct(
    query: MsProductsRequestGetProduct
  ): Promise<MsProductsResponseGetProduct> {
    return await this.prisma.product.findUnique({
      where: {
        id: query.id,
      },
    });
  }
}
