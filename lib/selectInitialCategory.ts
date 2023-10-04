import { supabase } from "./clientSupabase";

interface selectInitialCategoryProps {
  setSelectedCategory: (category: string) => void;
}

export default async function selectInitialCategory({
  setSelectedCategory,
}: selectInitialCategoryProps) {
  let { data: category, error } = await supabase
    .from("menu_categories")
    .select("name")
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
    .order("listing_order", { ascending: true })
    .range(0, 0);

  if (!error && category!.length > 0) {
    return setSelectedCategory(category![0].name);
  }

  if (error || category!.length === 0) {
    return console.log("no category available");
  }
}
