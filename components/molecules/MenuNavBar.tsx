"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import getAllMenuCategories from "@/lib/getAllMenuCategories";
import Flex from "../atoms/Flex";
import MainButton from "../atoms/MainButton";

export default function MenuNavBar({
  setChosenMenuCategory,
}: {
  setChosenMenuCategory: (chosenMenuCategory: string) => void;
}) {
  const [menuCategories, setMenuCategories] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    getAllMenuCategories({ setMenuCategories });
  }, []);

  return (
    <Flex className="justify-center items-center gap-6">
      {menuCategories.length > 0 &&
        menuCategories.map((cat) => (
          <MainButton key={cat} onClick={() => setChosenMenuCategory(cat)}>
            {cat}
          </MainButton>
        ))}
      {pathname === "/menu" && <MainButton>Add New</MainButton>}
    </Flex>
  );
}
