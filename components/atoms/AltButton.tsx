interface AltButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number;
  onClick?: (e: any) => any;
  onChoice?: string;
}

export default function AltButton({
  children,
  onClick,
  onChoice,
}: AltButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-[11px] rounded-[32px] ${
        children === onChoice
          ? "bg-secondary text-white"
          : "bg-transparent text-secondary border-[1px] border-linear hover:bg-alternative"
      }`}
    >
      {children}
    </button>
  );
}
