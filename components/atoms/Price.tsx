interface PriceType extends React.HTMLProps<HTMLParagraphElement> {
  children: number | string
  color: 'primary' | 'secondary' | 'softSecondary'
  font: 'normal' | 'semibold'
}

export default function Price({ children, color, font, ...props }: PriceType) {
  return (
    <p {...props} className={`text-${color} font-${font} text-sm`}>
      {children}
    </p>
  )
}
