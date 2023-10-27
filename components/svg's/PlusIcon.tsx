import Flex from '../atoms/Flex'

export default function PlusIcon({ onClick }: { onClick: () => void }) {
  return (
    <Flex className="w-4 h-4" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-plus-circle fill-softSecondary w-full h-full hover:fill-success hover:bg-success/30 rounded-full"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </Flex>
  )
}
