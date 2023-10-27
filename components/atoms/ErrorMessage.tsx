interface ErrorMessageType extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageType) {
  return <p className="text-sm font-semibold text-error">{children}</p>
}
