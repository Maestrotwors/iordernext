export interface Category {
  id: number;
  name: string;
  parentId: number | null;
}

export interface ApiRequestGetCategoriesQuery {
  sId: number;
  dp: number;
  le: number;
  ssId?: number;
}

export type ApiResponseGetCategories = Category[];
