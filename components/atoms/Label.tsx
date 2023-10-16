interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor: string;
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-sm text-secondary" {...props}>
      {children}
    </label>
  );
}
