'use client'

import { supabase } from '@/lib/clientSupabase'
import { useRouter } from 'next/navigation'
import Flex from './Flex'
import LogoutIcon from "../svg's/LogoutIcon"

export default function LogoutButton() {
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/sign-in')
    console.log('signed out')
  }

  return (
    <Flex
      className="justify-start gap-2 items-center hover:bg-alternative p-2 rounded-md cursor-pointer text-sm"
      onClick={handleSignOut}
    >
      <LogoutIcon />
      <p>Sign out</p>
    </Flex>
  )
}
