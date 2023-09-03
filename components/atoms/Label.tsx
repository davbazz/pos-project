interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor: "email" | "password";
}

export default function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>;
}
