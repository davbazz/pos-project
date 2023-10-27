import Flex from './Flex'
import Label from './Label'
import Textarea from './Textarea'

interface TextareaLabelProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  htmlFor: string
  label: string
  placeholder: string
  value: string
  onChange?: (e: any) => void
}

export default function TextareaLabel({
  htmlFor,
  label,
  placeholder,
  value,
  onKeyDown,
  onChange,
  ...props
}: TextareaLabelProps) {
  return (
    <Flex className="flex-col gap-1">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Textarea
        placeholder={placeholder}
        value={value}
        {...props}
        onChange={onChange}
        rows={3}
      />
    </Flex>
  )
}
