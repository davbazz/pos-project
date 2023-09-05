"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import fetchProducts from "@/lib/fetchProducts";
import Flex from "../atoms/Flex";
import Product from "./Product";

export default function ProductList({
  chosenMenuCategory,
}: {
  chosenMenuCategory: string | null;
}) {
  const [productList, setProductList] = useState<any[] | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    fetchProducts({ chosenMenuCategory, setProductList, pathname });
  }, [chosenMenuCategory]);

  return (
    <Flex className="">
      {pathname === "/home" && (
        <Flex className="gap-4">
          {productList?.map((product) => (
            <Product
              key={product.listing_order}
              name={product.product_name}
              description={product.description}
              price={product.price}
              size={product.size}
              img_url={product.img_url}
              pathname={pathname}
            />
          ))}
        </Flex>
      )}

      {pathname === "/menu" && (
        <Flex className="gap-4">
          {productList?.map((product) => (
            <Product
              key={product.listing_order}
              name={product.product_name}
              description={product.description}
              price={product.price}
              size={product.size}
              img_url={product.img_url}
              ingredients={product.ingredients}
              available={product.available}
              pathname={pathname}
            />
          ))}
        </Flex>
      )}
    </Flex>
  );
}
