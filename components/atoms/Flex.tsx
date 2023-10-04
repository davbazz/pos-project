interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Flex({
  children,
  className,
  onClick,
  ...props
}: FlexProps) {
  return (
    <div className={`flex ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
