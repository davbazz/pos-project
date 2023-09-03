"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Flex from "../atoms/Flex";
import Product from "./Product";

export default function ProductList({
  chosenMenuCategory,
}: {
  chosenMenuCategory: string | null;
}) {
  const [productList, setProductList] = useState<any[] | null>(null);
  const supabase = createClientComponentClient();

  const fetchProducts = async () => {
    const { data: products, error } = await supabase
      .from("menu_products")
      .select("product_name, price, description, size, img_url, listing_order")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .eq("category_name", chosenMenuCategory)
      .eq("available", true)
      .order("listing_order", { ascending: true });

    if (!error) {
      setProductList(products);
    } else {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [chosenMenuCategory]);

  return (
    <Flex className="gap-4">
      {productList?.map((product) => (
        <Product
          key={product.listing_order}
          name={product.product_name}
          description={product.description}
          price={product.price}
          size={product.size}
          img_url={product.img_url}
        />
      ))}
    </Flex>
  );
}
