import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts(query: object = {}) {
    console.log(query);
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

  private getProductsCount(query: object) {
    return this.prisma.product.count();
  }

  private async getProductsData(query: object) {
    const limit = Number(query['limit']);
    return await this.prisma.product.findMany({
      skip: (query['page'] - 1) * limit,
      take: limit,
    });
  }
}
