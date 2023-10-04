"use client";

import { supabase } from "@/lib/clientSupabase";
import { useRouter } from "next/navigation";
import Flex from "./Flex";
import LogoutIcon from "./LogoutIcon";

export default function LogoutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
    console.log("signed out");
  };

  return (
    <Flex className="gap-4" onClick={handleSignOut}>
      <LogoutIcon />
      <p>Sign out</p>
    </Flex>
  );
}
