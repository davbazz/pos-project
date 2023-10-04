interface ProductWorkshopButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number;
  onClick?: (e: any) => any;
}

export default function ProductWorkshopButton({
  children,
  onClick,
}: ProductWorkshopButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
