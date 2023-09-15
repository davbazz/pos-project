import { CartType } from "./CartType";

export type OrderType = {
  user_id: string | undefined;
  items_quantity: number;
  order_option: string | null;
  total_price: number;
  products: CartType;
};
