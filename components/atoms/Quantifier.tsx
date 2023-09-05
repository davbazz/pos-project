import Flex from "./Flex";

interface QuantifierProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export default function Quantifier({ quantity, setQuantity }: QuantifierProps) {
  return (
    <Flex className="gap-2">
      <span onClick={() => setQuantity(quantity - 1)}>-</span>
      <span>{quantity}</span>
      <span onClick={() => setQuantity(quantity + 1)}>+</span>
    </Flex>
  );
}
