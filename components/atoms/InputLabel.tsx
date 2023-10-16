import Flex from "./Flex";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface InputLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  placeholder?: string;
  type?: string;
  value: string | number | string[];
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
}

export default function InputLabel({
  label,
  htmlFor,
  placeholder,
  type,
  value,
  onKeyDown,
  ...props
}: InputLabelProps) {
  return (
    <Flex className="flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        {...props}
      />
    </Flex>
  );
}
