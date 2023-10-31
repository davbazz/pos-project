import { OrderType } from '@/types/OrderType'
import Flex from '../atoms/Flex'
import SubText from '../atoms/SubText'
import dateConverter from '@/lib/dateConverter'
import capitaliseFirstLetter from '@/lib/capitaliseFirstLetter'

type HistoryTableType = {
  history: OrderType[] | null
  selectedStatus: string | null
  startIndex: number
  endIndex: number
}

export default function HistoryTable({
  history,
  selectedStatus,
  startIndex,
  endIndex,
}: HistoryTableType) {
  return (
    <Flex className="flex-col gap-2">
      {history != null &&
        history?.length > 0 &&
        history
          ?.filter((h) =>
            selectedStatus === null ? true : h.status === selectedStatus,
          )
          .slice(startIndex, endIndex)
          .map((order) => (
            <Flex className="justify-between items-center w-full border-[1px] border-linear px-6 py-1 rounded-lg bg-white text-[12px] text-secondary">
              <Flex className="w-[10%]">
                <p>{`#${order.id}`}</p>
              </Flex>
              <Flex className="w-[15%]">
                <p
                  className={`
                  ${order.status === 'pending' && 'text-softSecondary'} 
                  ${order.status === 'settled' && 'text-success'}
                  ${order.status === 'cancelled' && 'text-error'}
                  `}
                >
                  {capitaliseFirstLetter(order.status)}
                </p>
              </Flex>
              <Flex className="w-[15%]">
                <p>{`£${order.total_price}`}</p>
              </Flex>
              <Flex className="gap-2 w-[30%]">
                {order.products.map((p: any, i) => {
                  return <p key={i}>{JSON.parse(p).product_name}</p>
                })}
              </Flex>
              <Flex className="w-[15%]">
                <p>{order.order_option}</p>
              </Flex>
              <Flex className="w-[15%]">
                <p>{dateConverter(order.created_at ?? 'Error')}</p>
              </Flex>
            </Flex>
          ))}
    </Flex>
  )
}
