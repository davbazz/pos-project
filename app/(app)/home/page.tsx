"use client";

import { useState, useEffect } from "react";
import OrderProvider from "@/components/providers/OrderProvider";
import CartProvider from "@/components/providers/CartProvider";
import selectInitialCategory from "@/lib/selectInitialCategory";
import CategoriesNavBar from "@/components/molecules/CategoriesNavBar";
import HomeProductList from "@/components/organisms/HomeProductList";
import RedirectToMenu from "@/components/molecules/RedirectToMenu";
import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";
import Cart from "@/components/organisms/Cart";

export default function Homepage() {
  // navbar props
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [noCategory, setNoCategory] = useState<boolean>(false);

  useEffect(() => {
    selectInitialCategory({ setSelectedCategory, setNoCategory });
  }, []);

  return (
    <OrderProvider>
      <CartProvider>
        <main>
          {noCategory ? (
            <RedirectToMenu />
          ) : (
            <Flex className="flex-col">
              <CategoriesNavBar setSelectedCategory={setSelectedCategory} />
              <MainHeader>{selectedCategory}</MainHeader>
              <HomeProductList selectedCategory={selectedCategory} />
              <Cart />
            </Flex>
          )}
        </main>
      </CartProvider>
    </OrderProvider>
  );
}
