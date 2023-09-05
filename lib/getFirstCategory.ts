import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface getFirstCategoryProps {
  setChosenMenuCategory: (category: string | null) => void;
  setNoCategoryMessage?: (redirectToMenu: boolean) => void;
}

export default async function getFirstCategory({
  setChosenMenuCategory,
  setNoCategoryMessage,
}: getFirstCategoryProps) {
  const supabase = createClientComponentClient();

  let { data, error } = await supabase
    .from("menu_categories")
    .select("name")
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
    .order("listing_order", { ascending: true })
    .range(0, 0);

  if (!error && data!.length > 0) {
    return setChosenMenuCategory(data![0].name);
  } else {
    return setNoCategoryMessage!(true);
  }
}
