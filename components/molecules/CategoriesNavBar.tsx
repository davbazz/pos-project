"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import getAllMenuCategories from "@/lib/getAllMenuCategories";
import Flex from "../atoms/Flex";
import MainButton from "../atoms/MainButton";

export default function HomeNavBar({
  setSelectedCategory,
}: {
  setSelectedCategory: (selectedCategory: string) => void;
}) {
  const [menuCategories, setMenuCategories] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    getAllMenuCategories({ setMenuCategories });
  }, []);

  return (
    <Flex className="justify-center items-center gap-6">
      {menuCategories.length > 0 &&
        menuCategories.map((cat, i) => (
          <MainButton key={i} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </MainButton>
        ))}
      {pathname === "/menu" && <MainButton>Add New</MainButton>}
    </Flex>
  );
}
