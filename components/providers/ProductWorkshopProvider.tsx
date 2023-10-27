import { useState, createContext } from 'react'
import type { ProductType } from '@/types/ProductType'

interface ProductWorkshopContextType {
  productWorkshop: ProductType | null
  setProductWorkshop: (newProd: ProductType | null) => void
}

export const ProductWorkshopContext =
  createContext<ProductWorkshopContextType | null>(null)

export default function ProductWorkshopProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [productWorkshop, setProductWorkshop] = useState<ProductType | null>(
    null,
  )

  return (
    <ProductWorkshopContext.Provider
      value={{ productWorkshop, setProductWorkshop }}
    >
      {children}
    </ProductWorkshopContext.Provider>
  )
}
