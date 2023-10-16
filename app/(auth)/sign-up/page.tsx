import MainHeader from "@/components/atoms/MainHeader";
import SubText from "@/components/atoms/SubText";
import TextLink from "@/components/atoms/TextLink";
import SignUpForm from "@/components/organisms/SignUpForm";
import Flex from "@/components/atoms/Flex";
import BZVLogo from "@/components/atoms/BZVLogo";

export default function SignUp() {
  return (
    <div className="p-10">
      <Flex className="flex-col gap-12">
        <BZVLogo />
        <Flex className="flex-col gap-8 w-[384px] mx-auto">
          <Flex className="flex-col gap-2">
            <MainHeader>Get started</MainHeader>
            <SubText>Create a new account</SubText>
          </Flex>
          <Flex className="flex-col gap-8">
            <SignUpForm />
            <TextLink href="/sign-in">
              <span className="text-secondary/70">
                Already have an account?
              </span>{" "}
              Sign in now
            </TextLink>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
