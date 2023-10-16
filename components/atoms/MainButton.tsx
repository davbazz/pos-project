interface MainButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: (e: any) => any;
}

export default function MainButton({ children, onClick }: MainButtonProps) {
  return (
    <button onClick={onClick} className="">
      {children}
    </button>
  );
}
