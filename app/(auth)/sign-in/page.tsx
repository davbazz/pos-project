import BZVLogo from "@/components/svg's/BZVLogo"
import Flex from '@/components/atoms/Flex'
import MainHeader from '@/components/atoms/MainHeader'
import SubText from '@/components/atoms/SubText'
import TextLink from '@/components/atoms/TextLink'
import SignInForm from '@/components/organisms/SignInForm'

export default function SignIn() {
  return (
    <div className="p-10">
      <Flex className="flex-col gap-12">
        <BZVLogo />
        <Flex className="flex-col gap-8 w-[384px] mx-auto">
          <Flex className="flex-col gap-2">
            <MainHeader>Welcome back</MainHeader>
            <SubText>Sign in to your account</SubText>
          </Flex>
          <Flex className="flex-col gap-8">
            <SignInForm />
            <TextLink href="/sign-up">
              <span className="text-secondary/70">Don't have an account?</span>{' '}
              Sign up now
            </TextLink>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
