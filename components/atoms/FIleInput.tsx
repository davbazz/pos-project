interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fileInputKey?: number
}

export default function FileInput({ fileInputKey, ...props }: FileInputProps) {
  return (
    <input
      type="file"
      className="file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-bgPrimary file:text-primary hover:file:bg-hoverPrimary text-sm"
      key={fileInputKey}
      {...props}
    />
  )
}
