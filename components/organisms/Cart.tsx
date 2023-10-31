'use client'

import { supabase } from '@/lib/clientSupabase'
import { useState, useContext, useEffect } from 'react'
import { OrderContext } from '@/components/providers/OrderProvider'
import { CartContext } from '@/components/providers/CartProvider'
import type { OrderType } from '@/types/OrderType'
import type { CartType } from '@/types/CartType'
import Flex from '../atoms/Flex'
import MainHeader from '../atoms/MainHeader'
import SubText from '../atoms/SubText'
import Price from '../atoms/Price'
import MainButton from '../atoms/MainButton'
import CartProductList from '../molecules/CartProductList'
import AltButton from '../atoms/AltButton'
import EmptyCartMessage from '../atoms/EmptyCartMessage'
import priceValidation from '@/lib/priceValidation'
import SuccessfulOrderPlacement from '../molecules/SuccessfulOrderPlacement'

export default function Cart() {
  const [selectedOption, setSelectedOption] = useState<string>('Dine In')
  const [orderId, setOrderId] = useState<number | null>(null)
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false)

  const options = ['Dine In', 'Delivery', 'Take Away']

  const { order, setOrder } = useContext(OrderContext) as {
    order: OrderType
    setOrder: (newOrder: OrderType) => void
  }

  const { cart, setCart } = useContext(CartContext) as {
    cart: CartType
    setCart: (newCart: null) => void
  }

  const handleQuantity: number =
    cart?.reduce((accumulator, product) => {
      return accumulator + product.quantity
    }, 0) || 0

  const totalPrice: number =
    cart?.reduce((accumulator, product) => {
      return accumulator + product.total_price
    }, 0) || 0

  const randomStatus = () => {
    const statuses = ['pending', 'settled', 'cancelled']
    const randomIndex = Math.floor(Math.random() * statuses.length)
    return statuses[randomIndex]
  }

  const updateOrder = async () => {
    const updatedOrder = {
      user_id: (await supabase.auth.getUser()).data.user?.id,
      items_quantity: handleQuantity,
      order_option: selectedOption,
      total_price: totalPrice,
      products: cart,
      status: randomStatus(),
    }

    if (
      updatedOrder.user_id &&
      updatedOrder.items_quantity !== undefined &&
      updatedOrder.order_option !== null &&
      updatedOrder.total_price !== undefined &&
      updatedOrder.products !== null
    ) {
      setOrder(updatedOrder)
    } else {
      console.error(
        'Some required fields are missing or have incorrect values.',
      )
    }
  }

  const placeOrder = async () => {
    if (cart !== null) {
      const { data, error } = await supabase
        .from('order_history')
        .insert([
          {
            user_id: order?.user_id,
            items_quantity: order?.items_quantity,
            order_option: order?.order_option,
            total_price: order?.total_price,
            products: order?.products,
            status: order?.status,
          },
        ])
        .select()

      if (error) {
        console.error('Error placing order:', error.message)
      }
      if (data != null && data?.length > 0) {
        console.log('order placed successfully')
        setOrderPlaced(true)
        setCart(null)
      }
    }
  }

  const getOrderId = async () => {
    const { data, error } = await supabase
      .from('order_history')
      .select('id')
      .order('id', { ascending: false })
      .limit(1)

    if (error) {
      console.error('Error fetching latest order ID:', error.message)
    }
    if (data != null && data.length > 0) {
      setOrderId(data[0].id + 1)
    }
  }

  useEffect(() => {
    getOrderId()
    updateOrder()
  }, [cart])

  useEffect(() => {
    getOrderId()
    updateOrder()
  }, [selectedOption])

  useEffect(() => {
    setTimeout(() => {
      setOrderPlaced(false)
    }, 10000)
  }, [orderPlaced])

  return (
    <aside className="fixed top-0 right-0 w-[280px] h-screen bg-white border-l-[1px] border-l-linear px-5 py-6 overflow-y-scroll hidden-scrollbar">
      {cart === null || cart.length === 0 ? (
        orderPlaced ? (
          <SuccessfulOrderPlacement orderId={orderId} />
        ) : (
          <EmptyCartMessage />
        )
      ) : (
        <Flex className="w-full flex-col gap-7">
          <Flex className="justify-between items-center">
            <MainHeader>Cart</MainHeader>
            <SubText>{`Order #${orderId}`}</SubText>
          </Flex>
          <Flex className="justify-between">
            {options?.map((option) => (
              <AltButton
                onClick={() => setSelectedOption(option)}
                onChoice={selectedOption}
              >
                {option}
              </AltButton>
            ))}
          </Flex>
          <CartProductList />
          <Flex className="justify-between items-center">
            <SubText>Total: </SubText>
            <Price color="primary" font="semibold">{`£ ${priceValidation(
              totalPrice,
            )}`}</Price>
          </Flex>
          <MainButton onClick={placeOrder} cssSet="cartSet">
            Place an order
          </MainButton>
        </Flex>
      )}
    </aside>
  )
}
