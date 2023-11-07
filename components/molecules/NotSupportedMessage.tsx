import Flex from '../atoms/Flex'
import SubText from '../atoms/SubText'
import SadFaceIcon from "../svg's/SadFaceIcon"

export default function NotSupportedMessage() {
  return (
    <aside className="lg:hidden h-screen">
      <Flex className="flex-col justify-center items-center p-12 gap-2 h-[100svh] text-center">
        <SadFaceIcon />
        <SubText>
          This screen resolution is not supported, please use larger device
        </SubText>
      </Flex>
    </aside>
  )
}
