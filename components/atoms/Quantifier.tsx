import Flex from "./Flex";

interface QuantifierProps {
  location: string;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export default function Quantifier({
  quantity,
  setQuantity,
  location,
}: QuantifierProps) {
  const decreaseQuantity = () => {
    if (quantity > 1 && location === "home product") {
      setQuantity(quantity - 1);
    }
    if (quantity > 0 && location === "cart") {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Flex className="gap-3">
      <Flex
        onClick={decreaseQuantity}
        className="w-7 h-7 rounded-full border-[1px] leading-6 border-secondary/20 text-center text-2xl flex items-center justify-center hover:bg-alternative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 fill-primary stroke-secondary"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M20 12H4"
          ></path>
        </svg>
      </Flex>
      <span className="text-base leading-7">{quantity}</span>
      <Flex
        onClick={() => setQuantity(quantity + 1)}
        className="w-7 h-7 rounded-full border-[1px] leading-6 border-secondary/20 text-center text-2xl flex items-center justify-center hover:bg-alternative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3 fill-primary stroke-secondary"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </Flex>
    </Flex>
  );
}
