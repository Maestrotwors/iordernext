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

export interface ApiRequestGetBasketQuery {
  sId: number;
  dp: number;
  le: number;
}

export type ApiResponseGetBasket = BasketProduct[];
