import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../providers/CartProvider'
import { CartItemType } from '@/types/CartType'
import { CartType } from '@/types/CartType'
import Flex from '../atoms/Flex'
import Price from '../atoms/Price'
import ProductImg from '../atoms/ProductImg'
import Quantifier from '../atoms/Quantifier'
import SubText from '../atoms/SubText'
import MiniHeader from '../atoms/MiniHeader'
import priceValidation from '@/lib/priceValidation'

export default function CartProduct({
  prod,
  i,
}: {
  prod: CartItemType
  i: number
}) {
  const [quantity, setQuantity] = useState<number>(prod.quantity)

  const { cart, setCart } = useContext(CartContext) as {
    cart: CartType
    setCart: (newCart: any) => void
  }

  const updateCart = () => {
    try {
      const updatedCart = [...cart]
      updatedCart[i].quantity = quantity
      updatedCart[i].total_price = prod.price * quantity
      setCart(updatedCart)
      console.log(updatedCart)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProductFromCart = () => {
    if (quantity < 1) {
      console.log(cart[i])
      const updatedCart = [...cart]
      updatedCart.splice(i, 1)
      setCart(updatedCart)
      console.log(updatedCart)
    }
  }

  useEffect(() => {
    setQuantity(cart[i].quantity)
  }, [cart])

  useEffect(() => {
    if (quantity > 0) {
      updateCart()
    }
    if (quantity === 0) {
      deleteProductFromCart()
    }
  }, [quantity])

  return (
    <Flex
      className={`gap-4 w-full py-7 first:pt-0 border-b-[1px] border-linear `}
    >
      <Flex className="w-32">
        <ProductImg src={prod.img_url} alt={prod.product_name} />
      </Flex>
      <Flex className="flex-col gap-5 w-full">
        <Flex className="flex-col gap-1">
          <MiniHeader font="normal">{prod.product_name}</MiniHeader>
          <SubText>{prod.size}</SubText>
        </Flex>
        <Flex className="justify-between items-center">
          <Price color="secondary" font="normal">{`£ ${priceValidation(
            prod.total_price,
          )}`}</Price>
          <Quantifier
            quantity={quantity}
            setQuantity={setQuantity}
            location="cart"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
