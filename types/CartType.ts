export type CartItemType = {
  product_id: string | undefined
  category_name: string
  product_name: string
  img_url?: string
  size: string
  quantity: number
  price: number
  total_price: number
}

export type CartType = CartItemType[]
