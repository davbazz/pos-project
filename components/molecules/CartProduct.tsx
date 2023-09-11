import Flex from "../atoms/Flex";
import MainHeader from "../atoms/MainHeader";
import ProductImg from "../atoms/ProductImg";
import Quantifier from "../atoms/Quantifier";
import SubText from "../atoms/SubText";

export default function CartProduct({ name, size }) {
  return (
    <Flex className="">
      <Flex className="">
        <ProductImg
          src={`https://gpyiizwtvjlrtoqrsvcl.supabase.co/storage/v1/object/sign/product_img/latte.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9kdWN0X2ltZy9sYXR0ZS5qcGVnIiwiaWF0IjoxNjkzNzI2Njk4LCJleHAiOjE3MjUyNjI2OTh9.W6oCAKZ1QGU2FM6cKHZwqJnidS0Xj5Nmilr9qVp_3pE&t=2023-09-03T07%3A38%3A18.337Z`}
          alt={name}
        />
      </Flex>
      <Flex className="">
        <MainHeader>{name}</MainHeader>
        <SubText>{size}</SubText>
        <Flex className="">
          <Quantifier quantity={quantity} />
          <Price>17,95 $</Price>
        </Flex>
      </Flex>
    </Flex>
  );
}
