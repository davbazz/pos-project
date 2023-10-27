'use client'

import { useState } from 'react'
import { supabase } from '@/lib/clientSupabase'
import { useRouter } from 'next/navigation'
import Flex from '../atoms/Flex'
import GoOnEnter from '@/lib/goOnEnter'
import InputLabel from '../atoms/InputLabel'
import ErrorMessage from '../atoms/ErrorMessage'
import AuthButton from '../atoms/AuthButton'

export default function SignInForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>()

  const router = useRouter()

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (!error) {
      router.push('/home')
    } else {
      setError(error.message)
    }
  }

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
          onKeyDown={(e) => GoOnEnter(e, handleSignIn)}
        />
      </Flex>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <AuthButton onClick={handleSignIn}>Sign In</AuthButton>
    </Flex>
  )
}
