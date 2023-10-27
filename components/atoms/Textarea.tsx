interface TextareaType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...props }: TextareaType) {
  return (
    <textarea
      className="rounded-md px-4 py-2 text-sm text-secondary bg-alternative placeholder:text-sm placeholder:text-secondary/60 focus:outline-2 focus:outline-primary/70 "
      {...props}
    />
  )
}
