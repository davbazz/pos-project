import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface InputLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  placeholder?: string;
  type?: string;
  id: string;
  value: string | number | string[];
  onClick?: () => void;
}

export default function InputLabel({
  label,
  htmlFor,
  placeholder,
  type,
  id,
  value,
  ...props
}: InputLabelProps) {
  return (
    <div className="label-container">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        {...props}
      />
    </div>
  );
}
