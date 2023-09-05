interface AltButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number;
  onClick?: (e: any) => any;
}

export default function AltButton({ children, onClick }: AltButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
