"use client";

import { useEffect, useState } from "react";
import getAllMenuCategories from "@/lib/getAllMenuCategories";
import Flex from "../atoms/Flex";
import MainButton from "../atoms/MainButton";

type HomeCategoriesNavBarProps = {
  setSelectedCategory: (selectedCategory: string) => void;
};

export default function HomeCategoriesNavBar({
  setSelectedCategory,
}: HomeCategoriesNavBarProps) {
  const [menuCategories, setMenuCategories] = useState<string[]>([]);

  useEffect(() => {
    getAllMenuCategories({ setMenuCategories });
  }, []);

  return (
    <Flex className="justify-center items-center gap-6">
      {menuCategories.length > 0 && menuCategories !== null && (
        <Flex className="">
          {menuCategories.map((cat, i) => (
            <MainButton key={i} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </MainButton>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
