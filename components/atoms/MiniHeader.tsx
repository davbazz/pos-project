interface MiniHeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  font: 'normal' | 'semibold' | 'bold'
}

export default function MiniHeader({
  children,
  font,
  ...props
}: MiniHeaderType) {
  return (
    <h3
      {...props}
      className={`text-secondary font-${font} text-[15px] whitespace-nowrap`}
    >
      {children}
    </h3>
  )
}
