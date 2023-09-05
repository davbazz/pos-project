import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function getAllMenuCategories({
  setMenuCategories,
}: {
  setMenuCategories: (categories: string[]) => void;
}) {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase
    .from("menu_categories")
    .select("name")
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
    .order("listing_order", { ascending: true });

  if (!error) {
    return setMenuCategories(data!.map((cat) => cat.name));
  } else {
    return console.log(error!.message);
  }
}
