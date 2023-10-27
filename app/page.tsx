import AuthButton from '@/components/atoms/AuthButton'
import Flex from '@/components/atoms/Flex'
import Link from 'next/link'

export default function Home() {
  return (
    <Flex className="w-full h-screen justify-center items-center gap-3">
      <Link href="/sign-in">
        <AuthButton>Sign In</AuthButton>
      </Link>
      <Link href="/sign-up">
        <AuthButton>Sign Up</AuthButton>
      </Link>
    </Flex>
  )
}
