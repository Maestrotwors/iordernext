export interface Product {
  id: number;
  name: string;
  parentId: number | null;
  subSupplierId: number;
}
