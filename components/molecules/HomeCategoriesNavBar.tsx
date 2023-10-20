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
    <Flex className="justify-start overflow-x-scroll">
      {menuCategories?.length > 0 && menuCategories !== null ? (
        <Flex className="items-center gap-3">
          {menuCategories.map((c, i) => (
            <MainButton
              key={i}
              cssSet="categorySet"
              onClick={() => setSelectedCategory(c)}
            >
              {c}
            </MainButton>
          ))}
        </Flex>
      ) : (
        <RedirectToMenu></RedirectToMenu>
      )}
    </Flex>
  );
}
