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
    cart: CartType;
    setCart: (newCart: any) => void;
  };

  const addProdToCart = () => {
    const newProd: CartItemType = {
      product_id: id,
      quantity,
      category_name,
      product_name,
      img_url,
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
    <Flex className="rounded-2xl bg-white p-3">
      <Flex className="flex-col gap-5">
        <Flex className="justify-between gap-5">
          <Flex className="rounded-2xl">
            <ProductImg src={img_url} alt={product_name} />
          </Flex>
          <Flex className="flex-col justify-between">
            <Flex className="flex-col gap-3">
              <Flex className="justify-start items-center gap-3">
                <MiniHeader font="semibold">{product_name}</MiniHeader>
                <Price
                  color="primary"
                  font="semibold"
                >{`£ ${price[selectedSize]}`}</Price>
              </Flex>
              <SubText>{`"${description}"`}</SubText>
            </Flex>
            <Flex className="justify-between gap-2">
              {size.map((s, i) => (
                <AltButton
                  key={i}
                  onClick={() => setSelectedSize(size.indexOf(s))}
                  onChoice={size[selectedSize]}
                >
                  {s}
                </AltButton>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex className="justify-between items-center">
          <Quantifier
            quantity={quantity}
            setQuantity={setQuantity}
            location="home product"
          />
          <MainButton onClick={addProdToCart} cssSet="productSet">
            Add to cart
          </MainButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
