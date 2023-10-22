"use client";

import { useContext } from "react";
import { CartType } from "@/types/CartType";
import { CartContext } from "../providers/CartProvider";
import Flex from "../atoms/Flex";
import CartProduct from "./CartProduct";
import EmptyCartMessage from "../atoms/EmptyCartMessage";

export default function CartProductList() {
  const { cart } = useContext(CartContext) as {
    cart: CartType;
  };

  return (
    <Flex className="flex-row flex-wrap overflow-y-scroll hidden-scrollbar">
      {cart && cart.map((prod, i) => <CartProduct prod={prod} i={i} key={i} />)}
      {cart === null && <EmptyCartMessage />}
    </Flex>
  );
}
