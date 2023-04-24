import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common'; 
import { ApiRequestGetProductsQuery, ApiResponseGetProducts } from '@api-models/customer/catalog';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts(
    query: ApiRequestGetProductsQuery
  ): Promise<ApiResponseGetProducts> {
    return new Promise((resolve) => {
      Promise.all([
        this.getProductsData(query),
        this.getProductsCount(query),
      ]).then(([products, count]) => {
        const response = {
          productsCount: count,
          products: products,
        };
        resolve(response);
      });
    });
  }

  private getProductsCount(query: ApiRequestGetProductsQuery) {
    return this.prisma.product.count();
  }

  private async getProductsData(query: ApiRequestGetProductsQuery) {
    const limit = query.take;
    return await this.prisma.product.findMany({
      skip: (query.page - 1) * limit,
      take: limit,
    });
  }
}

