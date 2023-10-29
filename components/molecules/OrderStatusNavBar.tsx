import capitaliseFirstLetter from '@/lib/capitaliseFirstLetter'
import Flex from '../atoms/Flex'

export default function OrderStatusNavBar({
  selectedStatus,
  setSelectedStatus,
}: {
  selectedStatus: null | 'pending' | 'settled' | 'cancelled'
  setSelectedStatus: (
    status: null | 'pending' | 'settled' | 'cancelled',
  ) => void
}) {
  const statuses = [null, 'pending', 'settled', 'cancelled']

  return (
    <Flex className="gap-5">
      {statuses.map((status: any) => (
        <h3
          onClick={() => setSelectedStatus(status)}
          className={`font-semibold text-[15px] cursor-pointer ${
            status === selectedStatus
              ? 'text-primary underline decoration-primary underline-offset-8'
              : 'text-softSecondary'
          }`}
        >
          {status ? capitaliseFirstLetter(status) : 'All Orders'}
        </h3>
      ))}
    </Flex>
  )
}
