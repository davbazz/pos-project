"use client";

import { useState, useEffect } from "react";
import getFirstCategory from "@/lib/getFirstCategory";
import MenuNavBar from "@/components/molecules/MenuNavBar";
import ProductList from "@/components/molecules/ProductList";
import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";
import MenuProductWorkshop from "@/components/organisms/MenuProductWorkshop";

export default function Menu() {
  const [chosenMenuCategory, setChosenMenuCategory] = useState<string | null>(
    null
  );
  const [noCategoryMessase, setNoCategoryMessage] = useState<boolean>(false);

  useEffect(() => {
    getFirstCategory({ setChosenMenuCategory, setNoCategoryMessage });
  }, []);

  return (
    <main>
      <Flex className="flex-col">
        <MenuNavBar setChosenMenuCategory={setChosenMenuCategory} />
        <MainHeader>{chosenMenuCategory}</MainHeader>
        <ProductList chosenMenuCategory={chosenMenuCategory} />
        <MenuProductWorkshop />
      </Flex>
    </main>
  );
}
