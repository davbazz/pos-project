import { useState, createContext, ReactNode } from 'react'
import { OrderType } from '@/types/OrderType'

interface OrderProviderProps {
  children: ReactNode
}

interface OrderContextType {
  order: OrderType | null
  setOrder: (newOrder: OrderType | null) => void
}

export const OrderContext = createContext<OrderContextType | null>(null)

export default function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<OrderType | null>(null)

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
