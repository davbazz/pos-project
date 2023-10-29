import Flex from '../atoms/Flex'
import MiniHeader from '../atoms/MiniHeader'

export default function HistoryTableHeader() {
  const headers = ['Id', 'Status', 'Total', 'Items', 'Type', 'Date']

  return (
    <Flex className="w-full">
      {headers.map((header) => (
        <Flex
          className={`
            ${header === 'Id' && `w-[10%]`} 
            ${header === 'Status' && `w-[15%]`} 
            ${header === 'Total' && `w-[15%]`} 
            ${header === 'Items' && `w-[20%]`} 
            ${header === 'Type' && `w-[15%]`} 
            ${header === 'Date' && `w-[15%]`}
          `}
        >
          <MiniHeader font="semibold" key={header}>
            {header}
          </MiniHeader>
        </Flex>
      ))}
    </Flex>
  )
}
