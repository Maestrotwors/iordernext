export interface BasketProduct {
  id: number;
  productId: number;
  quantity: number;
  subSupplierId: number;
  deliveryPointId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export class ApiRequestGetBasketQuery {

}

export type ApiResponseGetBasket = BasketProduct[];
