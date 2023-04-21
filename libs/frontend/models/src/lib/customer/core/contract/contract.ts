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

export class SelectedContract {
  supplier!: Supplier;
  deliveryPoint!: DeliveryPoint;
  legalEntity!: LegalEntity;
}
