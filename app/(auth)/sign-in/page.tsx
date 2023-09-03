import Flex from "@/components/atoms/Flex";
import MainHeader from "@/components/atoms/MainHeader";
import SubText from "@/components/atoms/SubText";
import TextLink from "@/components/atoms/TextLink";
import SignInForm from "@/components/organisms/SignInForm";

export default function SignIn() {
  return (
    <main>
      <Flex className="">
        <MainHeader>Welcome back!</MainHeader>
        <SubText>Sign in to you account</SubText>
        <SignInForm />
        <TextLink href="/sign-up">Don't have an account? Sign up now</TextLink>
      </Flex>
    </main>
  );
}
