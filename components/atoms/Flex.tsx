interface FlexProps {
  className: string;
  children?: React.ReactNode;
}

export default function Flex({ children, className }: FlexProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}
