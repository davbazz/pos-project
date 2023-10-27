import { useState, createContext } from 'react'
import type { ProductType } from '@/types/ProductType'

interface MenuProductListContextType {
  menuProductList: ProductType[] | null
  setMenuProductList: (newMenuProductList: ProductType[] | null) => void
}

export const MenuProductListContext =
  createContext<MenuProductListContextType | null>(null)

export default function MenuProductListProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [menuProductList, setMenuProductList] = useState<ProductType[] | null>(
    null,
  )

  return (
    <MenuProductListContext.Provider
      value={{ menuProductList, setMenuProductList }}
    >
      {children}
    </MenuProductListContext.Provider>
  )
}
