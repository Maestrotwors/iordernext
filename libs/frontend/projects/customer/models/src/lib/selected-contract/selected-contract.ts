interface Supplier {
  id: number;
  name: string;
  image: string;
}

interface DeliveryPoint {
  id: number;
  name: string;
}

interface LegalEntity {
  id: number;
  name: string;
}

export interface SelectedContract {
  supplier: Supplier;
  deliveryPoint: DeliveryPoint;
  legalEntity: LegalEntity;
}
