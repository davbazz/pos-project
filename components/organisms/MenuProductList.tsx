'use client'

import { supabase } from '@/lib/clientSupabase'
import { useEffect, useState, useContext } from 'react'
import { SelectedCategoryContext } from '@/components/providers/SelectedCategoryProvider'
import { ProductWorkshopContext } from '@/components/providers/ProductWorkshopProvider'
import type { ProductType } from '@/types/ProductType'
import Flex from '../atoms/Flex'
import SubText from '../atoms/SubText'
import AltButton from '../atoms/AltButton'
import MenuProduct from '../molecules/MenuProduct'

export default function productList() {
  const [productList, setProductList] = useState<ProductType[] | null>(null)
  const [noProducts, setNoProducts] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { selectedCategory } = useContext(SelectedCategoryContext) as {
    selectedCategory: string
  }

  const { setProductWorkshop } = useContext(ProductWorkshopContext) as {
    setProductWorkshop: (newProd: ProductType | null) => void
  }

  const fetchMenuProducts = async () => {
    const { data: products, error } = await supabase
      .from('menu_products')
      .select(
        'id, product_name, category_name, price, description, ingredients, available, size, img_url, listing_order',
      )
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
      .eq('category_name', selectedCategory)
      .order('listing_order', { ascending: true })

    if (!error) {
      setErrorMessage(null)
      if (products.length > 0) {
        setNoProducts(false), setProductList(products)
      } else {
        setProductList(null), setNoProducts(true)
      }
    } else {
      setErrorMessage(error.message)
    }

    console.log('Products:', products)
    console.log('Error:', error)
    console.log('Category:', selectedCategory)
  }

  useEffect(() => {
    const channel = supabase
      .channel('menu_products')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'menu_products' },
        () => {
          fetchMenuProducts()
          console.log('Change received!')
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  useEffect(() => {
    fetchMenuProducts()
    setProductWorkshop(null)
  }, [selectedCategory])

  return (
    <Flex className="flex-wrap gap-4 w-full">
      {productList?.map((product, i) => (
        <MenuProduct
          key={i}
          id={product.id}
          product_name={product.product_name}
          category_name={product.category_name}
          description={product.description}
          price={product.price}
          size={product.size}
          img_url={product.img_url}
          available={product.available}
          ingredients={product.ingredients}
        />
      ))}

      {noProducts && <SubText>No products in this category</SubText>}

      {errorMessage && (
        <Flex className="">
          <SubText>{errorMessage}</SubText>
          <AltButton onClick={fetchMenuProducts}>Try Again</AltButton>
        </Flex>
      )}
    </Flex>
  )
}
