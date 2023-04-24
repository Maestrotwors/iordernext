import { ApiResponseGetBasket } from '@api-models/customer/basket';
import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';
//import { ApiResponseSuppliers } from '@api-models/customer/suppliers';

@Injectable()
export class BasketService {
  constructor(private prisma: PrismaService) {}

  async getBasket(): Promise<ApiResponseGetBasket> {
    const basketData = await this.prisma.basket.findMany({}) as ApiResponseGetBasket;
	return basketData;
  }

  /*
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
				}
			}
		});
	}
  }*/
}
