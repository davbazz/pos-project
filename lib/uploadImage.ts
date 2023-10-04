import { supabase } from "./clientSupabase";
import { v4 as uniqueID } from "uuid";

export default async function uploadImage(e: any, name: string) {
  const file = e.target.files[0];
  const user = (await supabase.auth.getSession()).data.session?.user.id;

  const { data, error } = await supabase.storage
    .from("product_img")
    .upload(`${user}/${uniqueID}/${name}`, file, {
      cacheControl: "3600",
      upsert: true,
    });
}
