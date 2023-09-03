"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Flex from "../atoms/Flex";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/MainButton";
import SubText from "../atoms/SubText";
import GoOnEnter from "@/lib/goOnEnter";

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>();

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      router.push("/home");
    } else {
      setError(error.message);
    }
  };

  return (
    <Flex className="">
      <Label htmlFor="email">Email Address</Label>
      <Input
        type="email"
        name="email"
        value={email}
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Label htmlFor="password">Your Password</Label>
      <Input
        type="password"
        name="password"
        value={password}
        placeholder="Your password"
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => GoOnEnter(e, handleSignIn)}
      />
      <Button onClick={handleSignIn}>Sign In</Button>

      {error && <SubText>{error}</SubText>}
    </Flex>
  );
}
