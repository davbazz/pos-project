import Flex from '../atoms/Flex'
import Link from 'next/link'
import MainButton from '../atoms/MainButton'
import SubText from '../atoms/SubText'

export default function RedirectToMenu() {
  return (
    <Flex className="items-center gap-3 w-full h-full">
      <SubText>You need to create a menu first</SubText>
      <Link href="/menu">
        <MainButton cssSet="newProdSet">Set up a menu</MainButton>
      </Link>
    </Flex>
  )
}
