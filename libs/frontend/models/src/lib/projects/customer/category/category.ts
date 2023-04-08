export interface CustomerCatalogCategory {
  id: number;
  name: string;
  parentId: number | null;
  subSupplierId: number;
}
