export type CartItemType = {
  product_id: string;
  category: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
};

export type CartType = CartItemType[];
