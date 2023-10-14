"use client";

import { supabase } from "@/lib/clientSupabase";
import { OrderType } from "@/types/OrderType";
import { useEffect, useState } from "react";
import dateConverter from "@/lib/dateConverter";
import Flex from "@/components/atoms/Flex";
import SubText from "@/components/atoms/SubText";

export default function History() {
  const [history, setHistory] = useState<OrderType[] | null>(null);

  const fetchOrderHistory = async () => {
    const { data, error } = await supabase
      .from("order_history")
      .select("*")
      .eq("user_id", (await supabase.auth.getUser()).data.user?.id)
      .order("id", { ascending: false });

    if (error) {
      console.log(error);
    }
    if (data) {
      setHistory(data);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h1>History content</h1>
      {history != null &&
        history?.length > 0 &&
        history?.map((order) => (
          <Flex className="justify-between">
            <SubText>{order.id}</SubText>
            <SubText>{order.status}</SubText>
            <SubText>{order.total_price}</SubText>
            <Flex className="gap-2">
              {order.products.map((p: any, i) => {
                return <SubText key={i}>{JSON.parse(p).product_name}</SubText>;
              })}
            </Flex>
            <SubText>{order.order_option}</SubText>
            <SubText>{dateConverter(order.created_at ?? "Error")}</SubText>
          </Flex>
        ))}
      {!history && <p>Loading...</p>}
      {history && history.length === 0 && <p>No history</p>}
    </div>
  );
}
