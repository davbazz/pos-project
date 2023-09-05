interface PriceType extends React.HTMLProps<HTMLParagraphElement> {
  children: string[] | string;
}

export default function Price({ children, ...props }: PriceType) {
  return <p {...props}>{children}</p>;
}
