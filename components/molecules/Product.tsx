import { useState } from "react";
import AltButton from "../atoms/AltButton";
import Flex from "../atoms/Flex";
import MiniHeader from "../atoms/MiniHeader";
import Price from "../atoms/Price";
import ProductImg from "../atoms/ProductImg";
import SubText from "../atoms/SubText";
import MainButton from "../atoms/MainButton";
import Quantifier from "../atoms/Quantifier";

interface ProductProps {
  name: string;
  description: string;
  price: string[];
  size: string[];
  img_url: string;
  ingredients?: string[];
  available?: boolean;
  pathname?: string;
}

export default function Product({
  name,
  description,
  price,
  size,
  img_url,
  ingredients,
  available,
  pathname,
}: ProductProps) {
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Flex className="">
      {pathname === "/home" && (
        <Flex className="flex-col gap-2">
          <Flex className="justify-between">
            <Flex className="">
              <ProductImg
                src={`https://gpyiizwtvjlrtoqrsvcl.supabase.co/storage/v1/object/sign/product_img/latte.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0X2ltZy9sYXR0ZS5qcGVnIiwiaWF0IjoxNjkzNzI2Njk4LCJleHAiOjE3MjUyNjI2OTh9.W6oCAKZ1QGU2FM6cKHZwqJnidS0Xj5Nmilr9qVp_3pE&t=2023-09-03T07%3A38%3A18.337Z`}
                alt={name}
              />
            </Flex>
            <Flex className="flex-col">
              <Flex className="justify-between">
                <MiniHeader>{name}</MiniHeader>
                <Price>{price[selectedSize]}</Price>
              </Flex>
              <SubText>{description}</SubText>
              <Flex className="justify-between">
                {size.map((s) => (
                  <AltButton onClick={() => setSelectedSize(size.indexOf(s))}>
                    {s}
                  </AltButton>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex className="">
            <Quantifier
              quantity={quantity}
              setQuantity={setQuantity}
            ></Quantifier>
            <MainButton>Add to cart</MainButton>
          </Flex>
        </Flex>
      )}

      {pathname === "/menu" && (
        <Flex className="flex-col gap-2">
          <Flex className="justify-between">
            <Flex className="">
              <ProductImg
                src={`https://gpyiizwtvjlrtoqrsvcl.supabase.co/storage/v1/object/sign/product_img/latte.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0X2ltZy9sYXR0ZS5qcGVnIiwiaWF0IjoxNjkzNzI2Njk4LCJleHAiOjE3MjUyNjI2OTh9.W6oCAKZ1QGU2FM6cKHZwqJnidS0Xj5Nmilr9qVp_3pE&t=2023-09-03T07%3A38%3A18.337Z`}
                alt={name}
              />
            </Flex>
            <Flex className="flex-col justify-between">
              <Flex className="justify-between">
                <MiniHeader>{name}</MiniHeader>
                <SubText>{available ? "Available" : "Not Available"}</SubText>
              </Flex>
              <SubText>{description}</SubText>
              <Flex className="flex-col justify-between">
                {size.map((s, i) => (
                  <Flex className="justify-between flex-row items-center  gap-2">
                    <AltButton>{s}</AltButton>
                    <AltButton>{price[i]}</AltButton>
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <SubText>Ingredients: {ingredients}</SubText>
        </Flex>
      )}
    </Flex>
  );
}
