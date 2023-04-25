import { MsProductsRequestGetCategories, MsProductsResponseGetCategories } from '@backend/microservices-models/customer/products';
import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getCategories(
    query: MsProductsRequestGetCategories
  ): Promise<MsProductsResponseGetCategories> {
    return await this.prisma.category.findMany({});
  }
}
