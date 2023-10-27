import Flex from '../atoms/Flex'

export default function MinusIcon({ onClick }: { onClick: () => void }) {
  return (
    <Flex className="w-4 h-4" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-dash-circle fill-softSecondary w-full h-full hover:fill-error hover:bg-error/30 rounded-full"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </Flex>
  )
}
