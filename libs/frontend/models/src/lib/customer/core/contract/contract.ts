export interface Supplier {
	id: number;
	name: string;
	image: string;
}

export interface DeliveryPoint {
	id: number;
	name: string;
}

export interface LegalEntity {
	id: number;
	name: string;
}

export interface SubSupplier {
	id: number;
	name: string;
}

export interface SelectedContract {
	supplier: Supplier;
	deliveryPoint: DeliveryPoint;
	legalEntity: LegalEntity;
	subSupplier: SubSupplier | null;
}