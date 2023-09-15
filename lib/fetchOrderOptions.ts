import { supabase } from "./clientSupabase";

export default async function fetchOrderOptions({
  setOptions,
  setSelectedOption,
}: {
  setOptions: (option: string[]) => void;
  setSelectedOption: (option: string) => void;
}) {
  const { data: options, error } = await supabase
    .from("order_options")
    .select("options")
    .eq("user_id", (await supabase.auth.getUser()).data.user?.id);

  if (!error && options.length > 0) {
    setOptions(options[0].options);
    setSelectedOption(options[0].options[0]);
  }
}
