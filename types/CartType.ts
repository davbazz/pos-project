export type CartItemType = {
  product_id: string;
  category: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
  total_price: number;
};

export type CartType = CartItemType[];
