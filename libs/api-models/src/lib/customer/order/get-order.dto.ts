export interface SubSupplier {
	id: number;
	name: string;
}

export interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
	available: number;
	count: number;
}


export interface Basket {
	id: number;
	subSupplier: SubSupplier;
	products: Product[];
}

export interface ApiRequestGetOrderQuery {
	sId: number;
	dp: number;
	le: number;
}

export interface ApiResponseGetOrder {
  orders: Basket[];
  totalAmmount: number;
}
