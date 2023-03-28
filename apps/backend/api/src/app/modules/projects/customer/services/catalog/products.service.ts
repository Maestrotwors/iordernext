import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    const catalog = await this.prisma.product.findMany();
    return {
      productsCount: 33333,
      products: catalog,
    };
    /*try {
      return {
        productsCount: 3,
        products: [
          {
            id: '1',
            name: 'Product 1',
            price: 100,
            available: 5,
            image:
              'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/7702018874293.jpg',
          },
          {
            id: '2',
            name: 'Product 2',
            price: 100,
            available: 5,
            image:
              'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/7702018874293.jpg',
          },
          {
            id: '3',
            name: 'Product 3',
            price: 100,
            available: 5,
            image:
              'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/7702018874293.jpg',
          },
        ],
      };
    } catch {
      throw new NotAcceptableException();
    }*/
  }
}
