import { supabase } from '@/lib/clientSupabase'
import { useContext } from 'react'
import { SelectedCategoryContext } from '@/components/providers/SelectedCategoryProvider'
import { ProductWorkshopContext } from '@/components/providers/ProductWorkshopProvider'
import type { ProductType } from '@/types/ProductType'
import MainButton from '../atoms/MainButton'

export default function AddNewProductButton() {
  const { selectedCategory } = useContext(SelectedCategoryContext) as {
    selectedCategory: string
  }

  const { setProductWorkshop } = useContext(ProductWorkshopContext) as {
    setProductWorkshop: (newCart: ProductType) => void
  }

  const addNewProduct = async () => {
    const newProd = {
      product_name: '',
      category_name: selectedCategory,
      user_id: (await supabase.auth.getUser()).data.user?.id,
      description: '',
      price: [0],
      size: [''],
      img_url: '',
      ingredients: '',
      available: true,
    }
    setProductWorkshop(newProd)
  }

  return (
    <MainButton onClick={addNewProduct} cssSet="newProdSet">
      New product
    </MainButton>
  )
}
