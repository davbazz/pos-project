interface AltButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number;
  onClick?: (e: any) => any;
}

export default function AltButton({ children, onClick }: AltButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-primary/90 text-white rounded-md px-4 py-2 text-base hover:bg-primary transition-200"
    >
      {children}
    </button>
  );
}
