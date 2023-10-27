interface MiniHeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  font: 'normal' | 'semibold'
}

export default function MiniHeader({
  children,
  font,
  ...props
}: MiniHeaderType) {
  return (
    <h3 {...props} className={`text-secondary font-${font} text-[15px]`}>
      {children}
    </h3>
  )
}
