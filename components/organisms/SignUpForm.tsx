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

export default function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>();
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/sign-in`,
      },
    });
    if (!error) {
      setCheckEmail(true);
      router.refresh();
    } else {
      setError(error.message);
      console.log(error);
    }
  };

  switch (checkEmail) {
    case true:
      return <SubText>Check you email</SubText>;
    case false:
      return (
        <Flex className="">
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
              onKeyDown={(e) => GoOnEnter(e, handleSignUp)}
            />
            <Button onClick={handleSignUp}>Sign Up</Button>
          </Flex>

          {error && <SubText>{error}</SubText>}
        </Flex>
      );
  }
}
