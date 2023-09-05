"use client";

import { useState, useEffect } from "react";
import getFirstCategory from "@/lib/getFirstCategory";
import MenuNavBar from "@/components/molecules/MenuNavBar";
import ProductList from "@/components/molecules/ProductList";
import RedirectToMenu from "@/components/molecules/RedirectToMenu";
import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";

export default function Homepage() {
  const [chosenMenuCategory, setChosenMenuCategory] = useState<string | null>(
    null
  );
  const [noCategoryMessase, setNoCategoryMessage] = useState<boolean>(false);

  useEffect(() => {
    getFirstCategory({ setChosenMenuCategory, setNoCategoryMessage });
  }, []);

  return (
    <main>
      {noCategoryMessase ? (
        <RedirectToMenu />
      ) : (
        <Flex className="flex-col">
          <MenuNavBar setChosenMenuCategory={setChosenMenuCategory} />
          <MainHeader>{chosenMenuCategory}</MainHeader>
          <ProductList chosenMenuCategory={chosenMenuCategory} />
        </Flex>
      )}
    </main>
  );
}
