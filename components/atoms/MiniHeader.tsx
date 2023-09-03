interface MiniHeaderType extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function MiniHeader({ children, ...props }: MiniHeaderType) {
  return <h3 {...props}>{children}</h3>;
}
