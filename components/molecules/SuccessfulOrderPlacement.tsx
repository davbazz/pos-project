import Flex from '../atoms/Flex'
import SubText from '../atoms/SubText'
import SuccessIcon from "../svg's/SuccessIcon"

export default function SuccessfulOrderPlacement({
  orderId,
}: {
  orderId: number | null
}) {
  return (
    <Flex className="justify-center flex-col items-center gap-1 h-full">
      <SuccessIcon />
      <SubText className="text-succsess">
        #{orderId} Order Successfully Placed
      </SubText>
    </Flex>
  )
}
