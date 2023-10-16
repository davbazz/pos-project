interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...props }: InputProps) {
  return (
    <input
      className="rounded-md px-4 py-2 text-sm text-secondary bg-alternative placeholder:text-sm placeholder:text-secondary/60 focus:outline-2 focus:outline-primary/70"
      {...props}
    />
  );
}
