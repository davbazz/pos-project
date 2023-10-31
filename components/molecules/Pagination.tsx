import { useEffect, useState } from 'react'
import Flex from '../atoms/Flex'

type PaginationType = {
  totalPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationType) {
  const [visibleNumbers, setVisibleNumbers] = useState<number[]>([1])

  const calcVisibleNumbers = () => {
    console.log('in pagination:', totalPages)
    if (totalPages === 1) {
      setVisibleNumbers([1])
    }
    if (totalPages === 2) {
      setVisibleNumbers([1, 2])
    }
    if (totalPages === 3) {
      setVisibleNumbers([1, 2, 3])
    }

    if (totalPages > 3) {
      if (currentPage > 1) {
        setVisibleNumbers([currentPage - 1, currentPage, currentPage + 1])
      }
      if (currentPage === 1) {
        setVisibleNumbers([currentPage, currentPage + 1, currentPage + 2])
      }
      if (currentPage === totalPages) {
        setVisibleNumbers([currentPage - 2, currentPage - 1, currentPage])
      }
    }
  }

  const handlePageChange = (page: number) => {
    if (page <= totalPages) {
      setCurrentPage(page)
    }
  }

  useEffect(() => {
    calcVisibleNumbers()
  }, [totalPages, currentPage])

  return (
    <Flex className="gap-3 items-center absolute bottom-[-55px] left-[50%] translate-x-[-50%]">
      {visibleNumbers.map((page: number) => (
        <p
          onClick={() => handlePageChange(page)}
          key={page}
          className={`cursor-pointer text-base ${
            page === currentPage
              ? ' text-primary underline underline-offset-8'
              : ' text-softSecondary'
          } `}
        >
          {page}
        </p>
      ))}
    </Flex>
  )
}
