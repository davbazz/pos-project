"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import MenuNavBar from "@/components/molecules/MenuNavBar";
import ProductList from "@/components/molecules/ProductList";

export default function Homepage() {
  const [chosenMenuCategory, setChosenMenuCategory] = useState<string | null>(
    null
  );
  const supabase = createClientComponentClient();

  const getFirstCategory = async () => {
    let { data, error } = await supabase
      .from("menu_categories")
      .select("name")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .order("listing_order", { ascending: true })
      .range(0, 0);

    if (!error) {
      setChosenMenuCategory(() => data![0].name);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    getFirstCategory();
  }, []);

  return (
    <main>
      <MenuNavBar setChosenMenuCategory={setChosenMenuCategory} />
      <ProductList chosenMenuCategory={chosenMenuCategory} />
    </main>
  );
}
