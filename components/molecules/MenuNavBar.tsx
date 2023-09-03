"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Flex from "../atoms/Flex";
import Button from "../atoms/MainButton";

export default function MenuNavBar({
  setChosenMenuCategory,
}: {
  setChosenMenuCategory: (chosenMenuCategory: string) => void;
}) {
  const [menuCategories, setMenuCategories] = useState<string[]>([]);
  const supabase = createClientComponentClient();

  const getAllMenuCategories = async () => {
    const { data, error } = await supabase
      .from("menu_categories")
      .select("name")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .order("listing_order", { ascending: true });

    if (!error) {
      setMenuCategories(data!.map((cat) => cat.name));
    } else {
      console.log(data);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllMenuCategories();
  }, []);

  return (
    <Flex className="justify-center items-center gap-6">
      {menuCategories?.map((cat) => (
        <Button key={cat} onClick={() => setChosenMenuCategory(cat)}>
          {cat}
        </Button>
      ))}
    </Flex>
  );
}
