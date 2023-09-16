interface CategoryInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function CategoryInput({ ...props }: CategoryInputProps) {
  return <input {...props} />;
}
