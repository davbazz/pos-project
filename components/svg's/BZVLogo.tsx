import { Exo_2 } from 'next/font/google'
import Flex from '../atoms/Flex'

const font = Exo_2({ subsets: ['latin'] })

export default function BZVLogo() {
  return (
    <Flex
      className={` ${font.className} font-bold text-softSecondary justify-start items-center`}
    >
      <span className="text-softPrimary">Q</span>POS
    </Flex>
  )
}
