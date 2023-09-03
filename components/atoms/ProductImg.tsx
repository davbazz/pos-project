// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

interface ProductImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function ProductImg({ ...props }: ProductImgProps) {
  // const supabase = createServerComponentClient({ cookies });

  // const img_url = await supabase.storage.from("product_img").list("*");
  return <img {...props} />;
}
