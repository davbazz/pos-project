interface AbsoluteProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string
  children?: React.ReactNode
  onClick?: () => void
}

export default function Absolute({
  children,
  className,
  onClick,
  ...props
}: AbsoluteProps) {
  return (
    <div className={`absolute ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  )
}
