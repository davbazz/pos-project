import { useState, createContext } from 'react'
import type { CartType } from '@/types/CartType'

interface CartContextType {
  cart: CartType | null
  setCart: (newCart: CartType | null) => void
}

export const CartContext = createContext<CartContextType | null>(null)

export default function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<CartType | null>(null)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
