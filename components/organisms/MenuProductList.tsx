"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import fetchProducts from "@/lib/fetchProducts";
import Flex from "../atoms/Flex";
import Product from "../molecules/MenuProduct";

interface ProductListProps {
  chosenMenuCategory: string | null;
  productList: any[] | null;
  setProductList: (products: [] | null) => void;
}

export default function ProductList({
  chosenMenuCategory,
  productList,
  setProductList,
}: ProductListProps) {
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
