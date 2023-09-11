import { supabase } from "@/lib/supabaseClient";
import { redirect } from "next/navigation";

export default async function checkSession() {
  const session = (await supabase.auth.getSession()).data.session?.user;

  if (!session) {
    console.log("No user found");
    redirect("/login");
  } else {
    console.log(session);
  }

  //   if (session) {
  //     console.log(session);
  //     console.log(session);
  //   } else {
  //     console.log("No user found");
  //     redirect("/login");
  //   }
}
