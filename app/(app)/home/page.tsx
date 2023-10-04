"use client";

import { useEffect, useContext } from "react";
import { SelectedCategoryContext } from "@/components/providers/SelectedCategoryProvider";
import selectInitialCategory from "@/lib/selectInitialCategory";
import HomeCategoriesNavBar from "@/components/molecules/HomeCategoriesNavBar";
import HomeProductList from "@/components/organisms/HomeProductList";
import RedirectToMenu from "@/components/molecules/RedirectToMenu";
import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";
import Cart from "@/components/organisms/Cart";

export default function Homepage() {
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext
  ) as {
    selectedCategory: string;
    setSelectedCategory: (newCategory: string) => void;
  };

  useEffect(() => {
    selectInitialCategory({ setSelectedCategory });
  }, []);

  return (
    <main>
      {selectedCategory === null || selectedCategory.length === 0 ? (
        <RedirectToMenu />
      ) : (
        <Flex className="flex-col">
          <HomeCategoriesNavBar />
          <MainHeader>{selectedCategory}</MainHeader>
          <HomeProductList />
          <Cart />
        </Flex>
      )}
    </main>
  );
}
