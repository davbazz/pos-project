interface AuthButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | number
  onClick?: (e: any) => any
}

export default function AuthButton({ children, onClick }: AuthButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-softPrimary text-white rounded-md px-4 py-2 text-base hover:bg-primary transition-200"
    >
      {children}
    </button>
  )
}
