"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import MenuNavBar from "@/components/molecules/MenuNavBar";
import ProductList from "@/components/molecules/ProductList";
import RedirectToMenu from "@/components/molecules/RedirectToMenu";
import Flex from "@/components/atoms/Flex";

export default function Homepage() {
  const [chosenMenuCategory, setChosenMenuCategory] = useState<string | null>(
    null
  );
  const [redirectToMenu, setRedirectToMenu] = useState<boolean>(false);
  const supabase = createClientComponentClient();

  const getFirstCategory = async () => {
    let { data, error } = await supabase
      .from("menu_categories")
      .select("name")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .order("listing_order", { ascending: true })
      .range(0, 0);

    if (!error && data!.length > 0) {
      setChosenMenuCategory(() => data![0].name);
    } else {
      setRedirectToMenu(true);
    }
  };

  useEffect(() => {
    getFirstCategory();
  }, []);

  return (
    <main>
      {redirectToMenu ? (
        <RedirectToMenu />
      ) : (
        <Flex className="flex-col">
          <MenuNavBar setChosenMenuCategory={setChosenMenuCategory} />
          <ProductList chosenMenuCategory={chosenMenuCategory} />
        </Flex>
      )}
    </main>
  );
}
