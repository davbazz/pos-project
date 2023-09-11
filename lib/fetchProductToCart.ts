import { supabase } from "./clientSupabase";

export default async function fetchProductToCart() {
  const { data: products, error } = await supabase
    .from("menu_products")
    .select("product_name, price, size, img_url")
    .eq("user_id", (await supabase.auth.getUser()).data.user);
}
