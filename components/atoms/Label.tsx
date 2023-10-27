interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
  htmlFor: string
}

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-[12px] text-softSecondary" {...props}>
      {children}
    </label>
  )
}
