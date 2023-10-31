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
    <Flex
      className="rounded-2xl flex-col gap-5 bg-white p-3 w-[calc(33%-11px)] h-[450px] overflow-y-scroll hidden-scrollbar"
      onClick={useProduct}
    >
      <Flex className="min-h-[160px] max-h-[160px]">
        <ProductImg src={img_url} alt={product_name} />
      </Flex>

      <Flex className="flex-col h-3/5 gap-2">
        <Flex className="justify-between items-center">
          <MiniHeader font="semibold">{product_name}</MiniHeader>
          <Flex
            className={`rounded-md justify-center py-1 px-2 text-[12px] ${
              available
                ? 'bg-success/10 text-success'
                : 'bg-error/10 text-error'
            }`}
          >
            {available ? 'Available' : 'Unavailable'}
          </Flex>
        </Flex>
        <Flex className="flex-col">
          <span className="text-secondary mr-1 text-[12px]">Description:</span>
          <SubText>{description}</SubText>
        </Flex>
        <Flex className="flex-col">
          <span className="text-secondary mr-1 text-[12px]">Ingredients:</span>
          <SubText>{ingredients}</SubText>
        </Flex>
        <Flex className="flex-col gap-1 text-[12px] text-secondary">
          Sizes:
          {size.map((s, i) => (
            <Flex className="justify-between items-center" key={i}>
              <SubText>{s}</SubText>
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
