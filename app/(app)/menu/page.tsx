'use client'

import { useEffect, useContext } from 'react'
import { SelectedCategoryContext } from '@/components/providers/SelectedCategoryProvider'
import ProductWorkshopProvider from '@/components/providers/ProductWorkshopProvider'
import MenuProductListProvider from '@/components/providers/MenuProductListProvider'
import selectInitialCategory from '@/lib/selectInitialCategory'
import MenuCategoriesNavBar from '@/components/molecules/MenuCategoriesNavBar'
import MenuProductList from '@/components/organisms/MenuProductList'
import Flex from '@/components/atoms/Flex'
import MainHeader from '@/components/atoms/MainHeader'
import MenuProductWorkshop from '@/components/organisms/MenuProductWorkshop'
import AddNewProductButton from '@/components/molecules/AddNewProductButton'
import Relative from '@/components/atoms/Relative'

export default function Menu() {
  const { selectedCategory, setSelectedCategory } = useContext(
    SelectedCategoryContext,
  ) as {
    selectedCategory: string
    setSelectedCategory: (newCategory: string) => void
  }

  useEffect(() => {
    selectInitialCategory({ setSelectedCategory })
  }, [])

  return (
    <ProductWorkshopProvider>
      <MenuProductListProvider>
        <Relative>
          <Flex className="flex-col gap-8 w-[calc(100%-280px)]">
            <MenuCategoriesNavBar />
            <Flex className="justify-between items-center">
              <MainHeader>{selectedCategory}</MainHeader>
              {selectedCategory && <AddNewProductButton />}
            </Flex>
            <MenuProductList />
            <MenuProductWorkshop />
          </Flex>
        </Relative>
      </MenuProductListProvider>
    </ProductWorkshopProvider>
  )
}
