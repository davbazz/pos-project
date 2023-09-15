import { useState, useEffect, useContext } from "react";
import { CartContext } from "../providers/CartProvider";
import { CartItemType } from "@/types/CartType";
import { CartType } from "@/types/CartType";
import Flex from "../atoms/Flex";
import MainHeader from "../atoms/MainHeader";
import Price from "../atoms/Price";
import ProductImg from "../atoms/ProductImg";
import Quantifier from "../atoms/Quantifier";
import SubText from "../atoms/SubText";

export default function CartProduct({ prod }: { prod: CartItemType }) {
  const [quantity, setQuantity] = useState<number>(prod.quantity);

  const { cart, setCart } = useContext(CartContext) as {
    cart: CartType;
    setCart: (newCart: any) => void;
  };

  const updateCart = () => {
    if (cart !== null && Array.isArray(cart)) {
      const updatedCart: CartType = [...cart];
      const index = updatedCart.findIndex(
        (i) => i.product_id === prod.product_id
      );
      updatedCart[index].quantity = quantity;
      updatedCart[index].total_price = prod.price * quantity;
      setCart(updatedCart);
    } else {
      console.log("Error: couldn't update the cart");
    }
  };

  const deleteProductFromCart = () => {
    if (quantity === 0 && cart !== null && Array.isArray(cart)) {
      const updatedCart: CartType = [...cart];
      const index = updatedCart.findIndex(
        (i) => i.product_id === prod.product_id
      );
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    } else {
      console.log("Error: couldn't delete the product");
    }
  };

  useEffect(() => {
    if (quantity > 0) {
      updateCart();
    }
    if (quantity === 0) {
      deleteProductFromCart();
    }
  }, [quantity]);

  return (
    <Flex className="">
      <Flex className="">
        <ProductImg
          src={`https://gpyiizwtvjlrtoqrsvcl.supabase.co/storage/v1/object/sign/product_img/latte.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0X2ltZy9sYXR0ZS5qcGVnIiwiaWF0IjoxNjkzNzI2Njk4LCJleHAiOjE3MjUyNjI2OTh9.W6oCAKZ1QGU2FM6cKHZwqJnidS0Xj5Nmilr9qVp_3pE&t=2023-09-03T07%3A38%3A18.337Z`}
          alt={prod.name}
        />
      </Flex>
      <Flex className="">
        <MainHeader>{prod.name}</MainHeader>
        <SubText>{prod.size}</SubText>
        <Flex className="">
          <Quantifier quantity={quantity} setQuantity={setQuantity} />
          <Price>{`${prod.total_price} $`}</Price>
        </Flex>
      </Flex>
    </Flex>
  );
}
