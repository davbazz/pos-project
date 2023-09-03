interface SubTextType extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export default function SubText({ children, ...props }: SubTextType) {
  return <p {...props}>{children}</p>;
}
