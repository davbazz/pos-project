"use client";

import { supabase } from "@/lib/clientSupabase";
import { useState, useContext } from "react";
import { OrderContext } from "@/components/providers/OrderProvider";
import { CartContext } from "@/components/providers/CartProvider";
import type { OrderType } from "@/types/OrderType";
import type { CartType } from "@/types/CartType";
import Flex from "../atoms/Flex";
import MainHeader from "../atoms/MainHeader";
import MiniHeader from "../atoms/MainHeader";
import OrderOptions from "../molecules/OrderOptions";
import SubText from "../atoms/SubText";
import Price from "../atoms/Price";
import MainButton from "../atoms/MainButton";
import CartProductList from "../molecules/CartProductList";

export default function Cart() {
  const [options, setOptions] = useState<string[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { order, setOrder } = useContext(OrderContext) as {
    order: OrderType | null;
    setOrder: (newOrder: OrderType | null) => void;
  };

  const { cart, setCart } = useContext(CartContext) as {
    cart: CartType | null;
    setCart: (newCart: any) => void;
  };

  const totalPrice = cart?.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  const placeOrder = async () => {
    if (order !== null) {
      const updatedOrder = {
        user_id: (await supabase.auth.getUser()).data.user?.id,
        items_quantity: cart!.length + 1,
        order_option: selectedOption,
        total_price: cart?.map((p) => p.price),
        products: [
          {
            product_id: "1",
            category: "Coffee",
            name: "Latte",
            size: "M",
            quantity: 3,
            price: 6.99,
          },
        ],
      };
    }
  };

  // const updateOrder = () => {
  //   const updatedOrder = {
  //     id: "1",
  //     created_at: "now",
  //     user_id: "david",
  //     items_quantity: 2,
  //     order_option: "dine in",
  //     total_price: 14.99,
  //     products: [
  //       {
  //         product_id: "1",
  //         category: "Coffee",
  //         name: "Latte",
  //         size: "M",
  //         quantity: 3,
  //         price: 6.99,
  //       },
  //     ],
  //   };
  //   setOrder(updatedOrder);
  // };

  return (
    <Flex className="flex-col gap-4">
      <Flex className="justify-between">
        <MainHeader>Cart</MainHeader>
        <MiniHeader>#1234</MiniHeader>
      </Flex>
      <OrderOptions
        options={options}
        setOptions={setOptions}
        setSelectedOption={setSelectedOption}
      />
      <CartProductList />
      <Flex className="justify-between">
        <SubText>Total</SubText>
        <Price>17,95 $</Price>
      </Flex>
      <MainButton onClick={() => console.log(totalPrice)}>
        Place an order
      </MainButton>

      <p>{JSON.stringify(cart)}</p>
    </Flex>
  );
}
