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
      <ProductImg
        src={`https://gpyiizwtvjlrtoqrsvcl.supabase.co/storage/v1/object/sign/product_img/latte.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0X2ltZy9sYXR0ZS5qcGVnIiwiaWF0IjoxNjkzNzI2Njk4LCJleHAiOjE3MjUyNjI2OTh9.W6oCAKZ1QGU2FM6cKHZwqJnidS0Xj5Nmilr9qVp_3pE&t=2023-09-03T07%3A38%3A18.337Z`}
        alt={name}
      />
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
