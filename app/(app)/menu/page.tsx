"use client";

import { useState, useEffect } from "react";
import getFirstCategory from "@/lib/selectInitialCategory";
import MenuCategoriesNavBar from "@/components/molecules/MenuCategoriesNavBar";
import ProductList from "@/components/organisms/HomeProductList";
import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";
import MenuProductWorkshop from "@/components/organisms/MenuProductWorkshop";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [productList, setProductList] = useState<any[] | null>(null);
  const [noCategory, setNoCategory] = useState<boolean>(false);

  useEffect(() => {
    getFirstCategory({ setSelectedCategory, setNoCategory });
  }, []);

  return (
    <main>
      <Flex className="flex-col">
        <MenuCategoriesNavBar
          setSelectedCategory={setSelectedCategory}
          noCategory={noCategory}
          setNoCategory={setNoCategory}
        />
        <MainHeader>{selectedCategory}</MainHeader>
        {/* <ProductList
          selectedCategory={selectedCategory}
          productList={productList}
          setProductList={setProductList}
        /> */}
        {/* <MenuProductWorkshop /> */}
      </Flex>
    </main>
  );
}
