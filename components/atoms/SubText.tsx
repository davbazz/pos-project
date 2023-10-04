interface SubTextType extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function SubText({ children, ...props }: SubTextType) {
  return <p {...props}>{children}</p>;
}
