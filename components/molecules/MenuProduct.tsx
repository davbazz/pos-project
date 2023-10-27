import { supabase } from '@/lib/clientSupabase'
import { useContext } from 'react'
import { ProductWorkshopContext } from '../providers/ProductWorkshopProvider'
import type { ProductType } from '@/types/ProductType'
import AltButton from '../atoms/AltButton'
import Flex from '../atoms/Flex'
import MiniHeader from '../atoms/MiniHeader'
import Price from '../atoms/Price'
import ProductImg from '../atoms/ProductImg'
import SubText from '../atoms/SubText'

export default function MenuProduct({
  id,
  product_name,
  category_name,
  description,
  price,
  size,
  img_url,
  available,
  ingredients,
}: ProductType) {
  const { setProductWorkshop } = useContext(ProductWorkshopContext) as {
    setProductWorkshop: (newCart: ProductType) => void
  }

  const useProduct = async () => {
    const prod = {
      id: id,
      user_id: (await supabase.auth.getUser()).data.user?.id,
      product_name: product_name,
      category_name: category_name,
      description: description,
      price: price,
      size: size,
      img_url: img_url,
      ingredients: ingredients,
      available: available,
    }
    console.log(prod)
    setProductWorkshop(prod)
  }

  return (
    <Flex className="justify-between" onClick={useProduct}>
      <Flex className="">
        <ProductImg src={img_url} alt={product_name} />
      </Flex>

      <Flex className="flex-col">
        <Flex className="">
          <MiniHeader font="semibold">{product_name}</MiniHeader>
          <SubText>{available ? 'Available' : 'Unavailable'}</SubText>
        </Flex>
        <Flex className="">
          <SubText>{description}</SubText>
        </Flex>
        <Flex className="">
          <SubText>{ingredients}</SubText>
        </Flex>
        <Flex className="flex-col">
          {size.map((s, i) => (
            <Flex className="justify-between" key={i}>
              <AltButton>{s}</AltButton>
              <Price font="semibold" color="primary">
                {price[i]}
              </Price>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
