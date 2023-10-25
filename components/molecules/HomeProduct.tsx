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
    <Flex className="rounded-2xl flex-col gap-3 bg-white p-3 w-[calc(50%-8px)] min-h-[220px]">
      <Flex className="justify-between gap-5 h-4/5">
        <Flex className="rounded-2xl w-[35%] h-full">
          <ProductImg src={img_url} alt={product_name} />
        </Flex>

        <Flex className="flex-col justify-between w-[calc(65%-12px)] min-h-[140px]">
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
          <Flex className="gap-2 items-center">
            <MiniHeader font="normal" color="secondary">
              Size:
            </MiniHeader>
            <Flex className="justify-start items-center gap-1 overflow-x-scroll hidden-scrollbar text-secondary text-sm -mb-4">
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
      </Flex>

      <Flex className="justify-between items-center gap-5 h-1/5">
        <Flex className="justify-center items-center w-[35%]">
          <Quantifier
            quantity={quantity}
            setQuantity={setQuantity}
            location="home product"
          />
        </Flex>
        <MainButton onClick={addProdToCart} cssSet="productSet">
          Add to cart
        </MainButton>
      </Flex>
    </Flex>
  );
}
