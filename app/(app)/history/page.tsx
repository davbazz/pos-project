'use client'

import { supabase } from '@/lib/clientSupabase'
import { OrderType } from '@/types/OrderType'
import { useEffect, useState } from 'react'
import Flex from '@/components/atoms/Flex'
import SubText from '@/components/atoms/SubText'
import MainHeader from '@/components/atoms/MainHeader'
import OrderStatusNavBar from '@/components/molecules/OrderStatusNavBar'
import HistoryTableHeader from '@/components/molecules/HistoryTableHeader'
import Pagination from '@/components/molecules/Pagination'
import HistoryTable from '@/components/organisms/HistoryTable'
import Relative from '@/components/atoms/Relative'

export default function History() {
  const [history, setHistory] = useState<OrderType[] | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<
    null | 'pending' | 'settled' | 'cancelled'
  >(null)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  const itemsPerPage = 15
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const fetchOrderHistory = async () => {
    const { data, error } = await supabase
      .from('order_history')
      .select('*')
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
      .order('id', { ascending: false })

    if (error) {
      console.log(error)
    }
    if (data) {
      setHistory(data)
      setTotalPages(Math.ceil(data.length / itemsPerPage))
      console.log(Math.ceil(data.length / itemsPerPage))
    }
  }

  useEffect(() => {
    fetchOrderHistory()
  }, [])

  useEffect(() => {
    if (selectedStatus !== null) {
      console.log(
        Math.ceil(
          history!.filter((h) => h.status === selectedStatus).length /
            itemsPerPage,
        ),
      )
      setTotalPages(
        Math.ceil(
          history!.filter((h) => h.status === selectedStatus).length /
            itemsPerPage,
        ),
      )
      setCurrentPage(1)
    }

    if (selectedStatus === null && history) {
      console.log(Math.ceil(history!.length / itemsPerPage))
      setTotalPages(Math.ceil(history!.length / itemsPerPage))
    }
  }, [selectedStatus])

  return (
    <Relative>
      <Flex className="flex-col gap-10 h-full">
        <MainHeader>Order History</MainHeader>
        <OrderStatusNavBar
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <Flex className="flex-col gap-3">
          <HistoryTableHeader />
          <HistoryTable
            history={history}
            selectedStatus={selectedStatus}
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </Flex>
        {history !== null && history.length !== 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}

        {!history && <SubText>Loading...</SubText>}
        {history && history.length === 0 && <SubText>No history</SubText>}
      </Flex>
    </Relative>
  )
}
