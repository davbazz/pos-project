"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/clientSupabase";
import Flex from "../atoms/Flex";
import SubText from "../atoms/SubText";
import GoOnEnter from "@/lib/goOnEnter";
import InputLabel from "../atoms/InputLabel";
import ErrorMessage from "../atoms/ErrorMessage";
import AuthButton from "../atoms/AuthButton";

export default function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>();
  const [checkEmail, setCheckEmail] = useState<boolean>(false);

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
      return <SubText>Check your email</SubText>;
    case false:
      return (
        <Flex className="flex-col gap-8">
          <Flex className="flex-col gap-4">
            <InputLabel
              htmlFor="email"
              label="Email"
              type="email"
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel
              htmlFor="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => GoOnEnter(e, handleSignUp)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Flex>

          <AuthButton onClick={handleSignUp}>Sign In</AuthButton>
        </Flex>
      );
  }
}
