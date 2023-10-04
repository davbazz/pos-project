import { useState, useContext, useEffect } from "react";
import { CartContext } from "@/components/providers/CartProvider";
import type { CartType, CartItemType } from "@/types/CartType";
import type { ProductType } from "@/types/ProductType";
import AltButton from "../atoms/AltButton";
import Flex from "../atoms/Flex";
import MiniHeader from "../atoms/MiniHeader";
import Price from "../atoms/Price";
import ProductImg from "../atoms/ProductImg";
import SubText from "../atoms/SubText";
import MainButton from "../atoms/MainButton";
import Quantifier from "../atoms/Quantifier";

export default function HomeProduct({
  id,
  product_name,
  category_name,
  description,
  price,
  size,
  img_url,
}: ProductType) {
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const { cart, setCart } = useContext(CartContext) as {
    cart: CartType | null;
    setCart: (newCart: any) => void;
  };

  const addProdToCart = () => {
    const newProd: CartItemType = {
      product_id: id,
      quantity,
      category_name,
      product_name,
      size: size[selectedSize],
      price: price[selectedSize],
      total_price: price[selectedSize] * quantity,
    };

    setCart((prevCart: CartType | null) => {
      if (prevCart === null) {
        return [newProd];
      }
      return [...prevCart, newProd];
    });

    display();
  };

  const display = () => {
    console.log(cart);
  };

  useEffect(() => {
    setQuantity(1);
  }, [category_name]);

  return (
    <Flex className="">
      <Flex className="flex-col gap-2">
        <Flex className="justify-between">
          <Flex className="">
            <ProductImg
              src={`https://gpyiizwtvjlrtoqrsvcl.supabase.co/storage/v1/object/sign/product_img/latte.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0X2ltZy9sYXR0ZS5qcGVnIiwiaWF0IjoxNjkzNzI2Njk4LCJleHAiOjE3MjUyNjI2OTh9.W6oCAKZ1QGU2FM6cKHZwqJnidS0Xj5Nmilr9qVp_3pE&t=2023-09-03T07%3A38%3A18.337Z`}
              alt={product_name}
            />
          </Flex>
          <Flex className="flex-col">
            <Flex className="justify-between">
              <MiniHeader>{product_name}</MiniHeader>
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
          <MainButton onClick={addProdToCart}>Add to cart</MainButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
