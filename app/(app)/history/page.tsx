'use client'

import { supabase } from '@/lib/clientSupabase'
import { OrderType } from '@/types/OrderType'
import { useEffect, useState } from 'react'
import dateConverter from '@/lib/dateConverter'
import Flex from '@/components/atoms/Flex'
import SubText from '@/components/atoms/SubText'
import MainHeader from '@/components/atoms/MainHeader'
import OrderStatusNavBar from '@/components/molecules/OrderStatusNavBar'
import MiniHeader from '@/components/atoms/MiniHeader'
import HistoryTableHeader from '@/components/molecules/HistoryTableHeader'

export default function History() {
  const [history, setHistory] = useState<OrderType[] | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<
    null | 'pending' | 'settled' | 'cancelled'
  >(null)

  // const fetchOrderHistory = async () => {
  //   const { data, error } = await supabase
  //     .from('order_history')
  //     .select('*')
  //     .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
  //     .eq('status', selectedStatus)
  //     .order('id', { ascending: false })

  //   if (error) {
  //     console.log(error)
  //   }
  //   if (data) {
  //     setHistory(data)
  //   }
  // }

  const fetchOrderHistory = async () => {
    setHistory(null)

    const query = supabase
      .from('order_history')
      .select('*')
      .eq('user_id', (await supabase.auth.getUser()).data.user?.id)

    if (
      selectedStatus === 'pending' ||
      selectedStatus === 'settled' ||
      selectedStatus === 'cancelled'
    ) {
      query.eq('status', selectedStatus)
    }

    const { data, error } = await query.order('id', { ascending: false })

    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      setHistory(data)
    }
  }

  useEffect(() => {
    fetchOrderHistory()
  }, [selectedStatus])

  return (
    <Flex className="flex-col gap-10">
      <MainHeader>Order History</MainHeader>

      <OrderStatusNavBar
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      <HistoryTableHeader />

      <Flex className="flex-col">
        {history != null &&
          history?.length > 0 &&
          history?.map((order) => (
            <Flex className="justify-between items-center">
              <SubText>{`#${order.id}`}</SubText>
              <SubText>{order.status}</SubText>
              <SubText>{order.total_price}</SubText>
              <Flex className="gap-2">
                {order.products.map((p: any, i) => {
                  return <SubText key={i}>{JSON.parse(p).product_name}</SubText>
                })}
              </Flex>
              <SubText>{order.order_option}</SubText>
              <SubText>{dateConverter(order.created_at ?? 'Error')}</SubText>
            </Flex>
          ))}
      </Flex>

      {!history && <SubText>Loading...</SubText>}
      {history && history.length === 0 && <p>No history</p>}
    </Flex>
  )
}
