"use client";

import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/MainButton";
import SubText from "../atoms/SubText";
import Flex from "../atoms/Flex";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginForm() {
  const [authView, setAuthView] = useState("signin");
  const [error, setError] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [checkYourEmailMessage, setCheckYourEmailMessage] = useState(false);

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
      console.log(error);
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/login`,
      },
    });
    if (!error) {
      setCheckYourEmailMessage(true);
      // router.push("/home");
    } else {
      setError(error.message);
      console.log(error);
    }
  };

  switch (authView) {
    case "signin":
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
            />
            <Button onClick={handleSignIn}>Sign In</Button>
          </Flex>

          <Flex className="">
            <SubText onClick={() => setAuthView("signup")}>
              Don't have an account yet? Sign up now
            </SubText>
            <SubText>Forgot you password?</SubText>
          </Flex>
        </Flex>
      );
    case "signup":
      return (
        <Flex className="">
          {checkYourEmailMessage ? (
            <SubText>Check your email to confirm your account</SubText>
          ) : (
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
                />
                <Button onClick={handleSignUp}>Sign Up</Button>
              </Flex>

              <Flex className="">
                <SubText onClick={() => setAuthView("signin")}>
                  Already have an account? Sign in now
                </SubText>
              </Flex>
            </Flex>
          )}
        </Flex>
      );
  }
}
