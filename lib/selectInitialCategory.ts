import { supabase } from "./clientSupabase";

interface selectInitialCategoryProps {
  setSelectedCategory: (category: string | null) => void;
  setNoCategory?: (redirectToMenu: boolean) => void;
}

export default async function getFirstCategory({
  setSelectedCategory,
  setNoCategory,
}: selectInitialCategoryProps) {
  let { data: category, error } = await supabase
    .from("menu_categories")
    .select("name")
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
    .order("listing_order", { ascending: true })
    .range(0, 0);

  if (!error && category!.length > 0) {
    console.log(category);
    return setSelectedCategory(category![0].name);
  } else {
    return setNoCategory!(true);
  }
}
