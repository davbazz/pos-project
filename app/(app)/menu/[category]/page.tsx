import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: string }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: products, error } = await supabase
    .from("menu_products")
    .select("name")
    .eq("category_name", Object.values(params));

  return (
    <div>
      {products?.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
}
