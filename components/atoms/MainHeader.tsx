interface MainHeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function MainHeader({ children, ...props }: MainHeaderType) {
  return <h2 {...props}>{children}</h2>;
}
