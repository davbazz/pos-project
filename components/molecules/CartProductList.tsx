"use client";

import { useContext } from "react";
import { CartType } from "@/types/CartType";
import { CartContext } from "../providers/CartProvider";
import Flex from "../atoms/Flex";
import CartProduct from "./CartProduct";

export default function CartProductList() {
  const { cart, setCart } = useContext(CartContext) as {
    cart: CartType | null;
    setCart: (newCart: any) => void;
  };

  return (
    <Flex className="">
      {cart && cart.map((prod, i) => <CartProduct prod={prod} key={i} />)}
      {cart === null && "No products in cart"}
    </Flex>
  );
}
