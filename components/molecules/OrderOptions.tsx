import { useEffect, useState } from "react";
import fetchOrderOptions from "@/lib/fetchOrderOptions";
import Flex from "../atoms/Flex";
import AltButton from "../atoms/AltButton";

export default function OrderOptions({
  options,
  setOptions,
}: {
  options: string[] | null;
  setOptions: (options: string[]) => void;
}) {
  useEffect(() => {
    fetchOrderOptions({ setOptions });
  }, []);

  return (
    <Flex className="justify-between">
      {options?.map((option, i) => (
        <AltButton>{option}</AltButton>
      ))}
    </Flex>
  );
}
