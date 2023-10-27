interface ProductImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: any
}

export default function ProductImg({ ...props }: ProductImgProps) {
  return <img {...props} className="rounded-2xl w-full h-full" />
}
