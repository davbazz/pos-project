interface ProductWorkshopButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number;
  onClick?: (e: any) => any;
  color?: "success" | "error";
}

export default function ProductWorkshopButton({
  children,
  onClick,
  color,
}: ProductWorkshopButtonProps) {
  return (
    <button
      onClick={onClick}
      color={color}
      className={`text-${color} bg-${color}/20 w-full py-2`}
    >
      {children}
    </button>
  );
}
