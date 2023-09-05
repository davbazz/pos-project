import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface fetchProductsProps {
  chosenMenuCategory: string | null;
  setProductList: (products: any) => void;
  pathname: string;
}

export default async function fetchProducts({
  chosenMenuCategory,
  setProductList,
  pathname,
}: fetchProductsProps) {
  const supabase = createClientComponentClient();

  const homeData =
    "product_name, price, description, size, img_url, listing_order";

  const menuData =
    "category_name, product_name, description, size, price, ingredients, available, img_url, listing_order";

  const { data: products, error } = await supabase
    .from("menu_products")
    .select(pathname === "/home" ? homeData : menuData)
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
    .eq("category_name", chosenMenuCategory)
    .eq("available", true)
    .order("listing_order", { ascending: true });

  if (!error) {
    return setProductList(products);
  } else {
    return console.log(error.message);
  }
}
