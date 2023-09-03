interface ProductImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export default function ProductImg({ ...props }: ProductImgProps) {
  return <img {...props} />;
}
