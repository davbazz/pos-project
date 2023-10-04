"use client";

import { useEffect, useContext } from "react";
import { SelectedCategoryContext } from "@/components/providers/SelectedCategoryProvider";
import { MenuCategoriesContext } from "../providers/MenuCategoriesProvider";
import getAllMenuCategories from "@/lib/getAllMenuCategories";
import Flex from "../atoms/Flex";
import MainButton from "../atoms/MainButton";
import RedirectToMenu from "./RedirectToMenu";

export default function HomeCategoriesNavBar() {
  const { setSelectedCategory } = useContext(SelectedCategoryContext) as {
    setSelectedCategory: (newCategory: string) => void;
  };

  const { menuCategories, setMenuCategories } = useContext(
    MenuCategoriesContext
  ) as {
    menuCategories: string[];
    setMenuCategories: (newCategories: string[]) => void;
  };

  useEffect(() => {
    getAllMenuCategories({ setMenuCategories });
  }, []);

  return (
    <Flex className="justify-center items-center gap-6">
      {menuCategories?.length > 0 && menuCategories !== null ? (
        <Flex className="">
          {menuCategories.map((cat, i) => (
            <MainButton key={i} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </MainButton>
          ))}
        </Flex>
      ) : (
        <RedirectToMenu></RedirectToMenu>
      )}
    </Flex>
  );
}
