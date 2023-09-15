import { useEffect } from "react";
import fetchOrderOptions from "@/lib/fetchOrderOptions";
import Flex from "../atoms/Flex";
import AltButton from "../atoms/AltButton";

type OrderOptionsType = {
  options: string[] | null;
  setOptions: (options: string[]) => void;
  setSelectedOption: (option: string) => void;
};

export default function OrderOptions({
  options,
  setOptions,
  setSelectedOption,
}: OrderOptionsType) {
  useEffect(() => {
    fetchOrderOptions({ setOptions, setSelectedOption });
  }, []);

  return (
    <Flex className="justify-between">
      {options?.map((option) => (
        <AltButton onClick={() => setSelectedOption(option)}>
          {option}
        </AltButton>
      ))}
    </Flex>
  );
}
