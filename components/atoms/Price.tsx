interface PriceType extends React.HTMLProps<HTMLParagraphElement> {
  children: number | string;
  color: "primary" | "secondary";
  font: "normal" | "semibold";
}

export default function Price({ children, color, font, ...props }: PriceType) {
  return (
    <p {...props} className={`text-${color} font-${font} text-base`}>
      {children}
    </p>
  );
}
