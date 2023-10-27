import { ReactNode } from 'react'
import Flex from '../atoms/Flex'

export default function IconLinkWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex className="justify-start place-items-center gap-2 hover:bg-alternative rounded-md py-1 cursor-pointer">
      {children}
    </Flex>
  )
}
