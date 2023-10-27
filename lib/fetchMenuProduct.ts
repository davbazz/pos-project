import { supabase } from './clientSupabase'

interface fetchProductsProps {
  selectedCategory: string | null
  setMenuProductList: (products: any) => void
  setNoProducts: (product: boolean) => void
  setErrorMessage: (error: string | null) => void
}

export default async function fetchMenuProducts({
  selectedCategory,
  setMenuProductList,
  setNoProducts,
  setErrorMessage,
}: fetchProductsProps) {
  const { data: products, error } = await supabase
    .from('menu_products')
    .select('*')
    .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
    .eq('category_name', selectedCategory)
    .order('listing_order', { ascending: true })

  if (!error) {
    setErrorMessage(null)
    console.log(products)

    if (products.length > 0) {
      return setNoProducts(false), setMenuProductList(products)
    } else {
      return setMenuProductList(null), setNoProducts(true)
    }
  } else {
    return setErrorMessage(error.message)
  }
}
