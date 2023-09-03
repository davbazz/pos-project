import MainHeader from "@/components/atoms/MainHeader";
import SubText from "@/components/atoms/SubText";
import TextLink from "@/components/atoms/TextLink";
import SignUpForm from "@/components/organisms/SignUpForm";
import Flex from "@/components/atoms/Flex";

export default function SignUp() {
  return (
    <main>
      <Flex className="">
        <MainHeader>Get started</MainHeader>
        <SubText>Create a new account</SubText>
        <SignUpForm />
        <TextLink href="/sign-in">
          Already have an account? Sign in now
        </TextLink>
      </Flex>
    </main>
  );
}
