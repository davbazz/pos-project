import AltButton from "../atoms/AltButton";
import Flex from "../atoms/Flex";
import MiniHeader from "../atoms/MiniHeader";
import Price from "../atoms/Price";
import ProductImg from "../atoms/ProductImg";
import SubText from "../atoms/SubText";

interface ProductType {
  name: string;
  description: string;
  price: string;
  size: string[];
  img_url: string;
}

export default function Product({
  name,
  description,
  price,
  size,
  img_url,
}: ProductType) {
  return (
    <Flex className="flex-col gap-2">
      <ProductImg src={img_url} alt={name} />
      <MiniHeader>{name}</MiniHeader>
      <Price>{price}</Price>
      <SubText>{description}</SubText>
      <Flex className="justify-between">
        {size.map((s) => (
          <AltButton>{s}</AltButton>
        ))}
      </Flex>
    </Flex>
  );
}
