"use client";

import { useEffect, useState, useContext } from "react";
import { SelectedCategoryContext } from "@/components/providers/SelectedCategoryProvider";
import type { ProductType } from "@/types/ProductType";
import fetchHomeProducts from "@/lib/fetchHomeProducts";
import Flex from "../atoms/Flex";
import HomeProduct from "../molecules/HomeProduct";
import SubText from "../atoms/SubText";
import AltButton from "../atoms/AltButton";
import RedirectToMenu from "../molecules/RedirectToMenu";

export default function HomeProductList() {
  const [productList, setProductList] = useState<ProductType[] | null>(null);
  const [noProducts, setNoProducts] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { selectedCategory } = useContext(SelectedCategoryContext) as {
    selectedCategory: string;
  };

  useEffect(() => {
    fetchHomeProducts({
      selectedCategory,
      setProductList,
      setNoProducts,
      setErrorMessage,
    });
  }, [selectedCategory]);

  return (
    <Flex className="flex-wrap gap-4">
      {productList?.map((product, i) => (
        <HomeProduct
          key={i}
          id={product.id}
          product_name={product.product_name}
          category_name={product.category_name}
          description={product.description}
          price={product.price}
          size={product.size}
          img_url={product.img_url}
          ingredients={product.ingredients}
          available={product.available}
        />
      ))}

      {noProducts && <RedirectToMenu />}

      {errorMessage && (
        <Flex className="">
          <SubText>{errorMessage}</SubText>
          <AltButton
            onClick={() =>
              fetchHomeProducts({
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
