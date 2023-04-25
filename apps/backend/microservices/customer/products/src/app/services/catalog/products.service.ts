import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';
import { MsProductsRequestGetProducts, MsProductsResponseGetProducts } from '@backend/microservices-models/customer/products';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts(
    query: MsProductsRequestGetProducts
  ): Promise<MsProductsResponseGetProducts> {
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

  private getProductsCount(query: MsProductsRequestGetProducts) {
    return this.prisma.product.count();
  }

  private async getProductsData(query: MsProductsRequestGetProducts) {
    const limit = query.take;
    return await this.prisma.product.findMany({
      skip: (query.page - 1) * limit,
      take: limit,
    });
  }
}

