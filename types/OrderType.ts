import { CartType } from "./CartType";

export type OrderType = {
  id?: string;
  created_at?: string;
  user_id: string | undefined;
  items_quantity: number;
  order_option: string | null;
  total_price: number;
  products: CartType;
  status: string;
};
