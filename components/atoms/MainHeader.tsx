interface MainHeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export default function MainHeader({ children, ...props }: MainHeaderType) {
  return (
    <h2 className="text-xl text-secondary font-semibold" {...props}>
      {children}
    </h2>
  )
}
