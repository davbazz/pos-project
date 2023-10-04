export type ProductType = {
  id?: string;
  product_name: string;
  category_name: string;
  user_id?: string;
  description: string;
  price: number[];
  size: string[];
  img_url: string;
  ingredients: string;
  available: boolean;
};
