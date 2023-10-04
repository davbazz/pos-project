"use client";

import { supabase } from "@/lib/clientSupabase";
import { useState, useContext, useEffect } from "react";
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
  const [orderId, setOrderId] = useState<number | null>(null);

  const { order, setOrder } = useContext(OrderContext) as {
    order: OrderType;
    setOrder: (newOrder: OrderType) => void;
  };

  const { cart } = useContext(CartContext) as {
    cart: CartType;
  };

  const handleQuantity: number =
    cart?.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0) || 0;

  const totalPrice: number =
    cart?.reduce((accumulator, product) => {
      return accumulator + product.total_price;
    }, 0) || 0;

  const updateOrder = async () => {
    const updatedOrder = {
      user_id: (await supabase.auth.getUser()).data.user?.id,
      items_quantity: handleQuantity,
      order_option: selectedOption,
      total_price: totalPrice,
      products: cart,
    };

    if (
      updatedOrder.user_id &&
      updatedOrder.items_quantity !== undefined &&
      updatedOrder.order_option !== null &&
      updatedOrder.total_price !== undefined &&
      updatedOrder.products !== null
    ) {
      setOrder(updatedOrder);
    } else {
      console.error(
        "Some required fields are missing or have incorrect values."
      );
    }
  };

  const placeOrder = async () => {
    if (cart !== null) {
      const { error } = await supabase.from("order_history").insert([
        {
          user_id: order?.user_id,
          items_quantity: order?.items_quantity,
          order_option: order?.order_option,
          total_price: order?.total_price,
          products: order?.products,
        },
      ]);

      if (!error) {
        console.log("order placed successfully");
      } else {
        console.log(error);
      }
    }
  };

  const getOrderId = async () => {
    const { data, error } = await supabase
      .from("order_history")
      .select("id")
      .order("id", { ascending: false })
      .limit(1);

    if (error) {
      console.error("Error fetching latest order ID:", error.message);
      return null;
    }
    if (data && data.length > 0) {
      return setOrderId(data[0].id + 1);
    }
    return null;
  };

  useEffect(() => {
    updateOrder();
  }, [cart]);

  useEffect(() => {
    getOrderId();
  }, []);

  return (
    <Flex className="">
      {cart === null || cart.length === 0 ? (
        <SubText>Cart is empty</SubText>
      ) : (
        <Flex className="flex-col gap-4">
          <Flex className="justify-between">
            <MainHeader>Cart</MainHeader>
            <MiniHeader>{`#${orderId}`}</MiniHeader>
          </Flex>
          <OrderOptions
            options={options}
            setOptions={setOptions}
            setSelectedOption={setSelectedOption}
          />
          <CartProductList />
          <Flex className="justify-between">
            <SubText>Total</SubText>
            <Price>{`${totalPrice}£`}</Price>
          </Flex>
          <MainButton onClick={placeOrder}>Place an order</MainButton>
        </Flex>
      )}
    </Flex>
  );
}
