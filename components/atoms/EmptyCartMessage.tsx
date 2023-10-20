import CartIcon from "../svg's/CartIcon";
import Flex from "./Flex";
import SubText from "./SubText";

export default function EmptyCartMessage() {
  return (
    <Flex className="w-full h-full flex-row justify-center items-center gap-2 text-center">
      <CartIcon />
      <SubText>The cart is empty</SubText>
    </Flex>
  );
}
