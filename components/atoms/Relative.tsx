interface RelativeProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Relative({
  children,
  className,
  onClick,
  ...props
}: RelativeProps) {
  return (
    <div className={`relative ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
}
