import Flex from '../atoms/Flex'

export default function SadFaceIcon() {
  return (
    <Flex className="w-8 h-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 125"
        className="fill-error"
      >
        <path d="M50,95A45,45,0,1,1,95,50,45.05,45.05,0,0,1,50,95Zm0-84.71A39.71,39.71,0,1,0,89.71,50,39.75,39.75,0,0,0,50,10.29Z" />
        <circle cx="33.19" cy="41.53" r="5.43" />
        <circle cx="66.81" cy="41.53" r="5.43" />
        <path d="M33.19,74.88a2.65,2.65,0,0,1-2-4.36,25.9,25.9,0,0,1,16.48-8.27c7-.56,14,2.13,20.88,8a2.65,2.65,0,0,1-3.45,4c-5.72-4.9-11.44-7.16-17-6.72a20.57,20.57,0,0,0-12.87,6.42A2.64,2.64,0,0,1,33.19,74.88Z" />
      </svg>
    </Flex>
  )
}