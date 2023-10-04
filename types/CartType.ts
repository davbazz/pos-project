export type CartItemType = {
  product_id: string;
  category_name: string;
  product_name: string;
  size: string;
  quantity: number;
  price: number;
  total_price: number;
};

export type CartType = CartItemType[];
