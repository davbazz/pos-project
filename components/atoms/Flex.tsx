interface FlexProps {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Flex({ children, className, onClick }: FlexProps) {
  return (
    <div className={`flex ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
