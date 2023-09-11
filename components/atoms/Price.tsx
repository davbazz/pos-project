interface PriceType extends React.HTMLProps<HTMLParagraphElement> {
  children: number | string;
}

export default function Price({ children, ...props }: PriceType) {
  return <p {...props}>{children}</p>;
}
