"use client";

import { useState, useEffect } from "react";
import getFirstCategory from "@/lib/selectInitialCategory";
import MenuNavBar from "@/components/molecules/CategoriesNavBar";
import ProductList from "@/components/organisms/HomeProductList";
import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";
import MenuProductWorkshop from "@/components/organisms/MenuProductWorkshop";

export default function Menu() {
  const [chosenMenuCategory, setChosenMenuCategory] = useState<string | null>(
    null
  );
  const [productList, setProductList] = useState<any[] | null>(null);
  const [noCategoryMessase, setNoCategoryMessage] = useState<boolean>(false);

  useEffect(() => {
    getFirstCategory({ setChosenMenuCategory, setNoCategoryMessage });
  }, []);

  return (
    <main>
      <Flex className="flex-col">
        <MenuNavBar setChosenMenuCategory={setChosenMenuCategory} />
        <MainHeader>{chosenMenuCategory}</MainHeader>
        <ProductList
          chosenMenuCategory={chosenMenuCategory}
          productList={productList}
          setProductList={setProductList}
        />
        <MenuProductWorkshop />
      </Flex>
    </main>
  );
}
