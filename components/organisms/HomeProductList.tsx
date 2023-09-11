"use client";

import { useEffect, useState } from "react";
import type { ProductType } from "@/types/ProductType";
import fetchProducts from "@/lib/fetchProducts";
import Flex from "../atoms/Flex";
import HomeProduct from "../molecules/HomeProduct";
import SubText from "../atoms/SubText";
import AltButton from "../atoms/AltButton";

type ProductListType = {
  selectedCategory: string | null;
};

export default function ProductList({ selectedCategory }: ProductListType) {
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const [noProducts, setNoProducts] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts({
      selectedCategory,
      setProductList,
      setNoProducts,
      setErrorMessage,
    });
  }, [selectedCategory]);

  return (
    <Flex className="gap-4">
      {productList?.map((product, i) => (
        <HomeProduct
          key={i}
          id={product.id}
          name={product.product_name}
          category={product.category_name}
          description={product.description}
          price={product.price}
          size={product.size}
          img_url={product.img_url}
        />
      ))}

      {noProducts && <SubText>No products in this category</SubText>}

      {errorMessage && (
        <Flex className="">
          <SubText>{errorMessage}</SubText>
          <AltButton
            onClick={() =>
              fetchProducts({
                selectedCategory,
                setProductList,
                setNoProducts,
                setErrorMessage,
              })
            }
          >
            Try Again
          </AltButton>
        </Flex>
      )}
    </Flex>
  );
}
