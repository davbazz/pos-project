import { supabase } from "./clientSupabase";

interface fetchProductsProps {
  selectedCategory: string | null;
  setProductList: (products: any) => void;
  setNoProducts: (product: boolean) => void;
  setErrorMessage: (error: string | null) => void;
}

export default async function fetchHomeProducts({
  selectedCategory,
  setProductList,
  setNoProducts,
  setErrorMessage,
}: fetchProductsProps) {
  const { data: products, error } = await supabase
    .from("menu_products")
    .select(
      "id, product_name, category_name, price, description, size, img_url, listing_order"
    )
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
    .eq("category_name", selectedCategory)
    .eq("available", true)
    .order("listing_order", { ascending: true });

  if (!error) {
    setErrorMessage(null);
    console.log(products);

    if (products.length > 0) {
      return setNoProducts(false), setProductList(products);
    } else {
      return setProductList(null), setNoProducts(true);
    }
  } else {
    return setErrorMessage(error.message);
  }
}
